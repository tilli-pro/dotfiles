/**
 * Pauses the execution for a specified amount of time.
 * @param {number | [number, number]} ms The number of milliseconds to sleep, or a range of milliseconds [min, max].
 * @returns A Promise that resolves after the specified delay.
 *
 * @example
 * ```ts
 * await sleep(1000); // Sleep for 1 second
 * await sleep([500, 1500]); // Sleep for a random amount of time between 500 and 1500 milliseconds
 * ```
 */
export function sleep(ms: number | [number, number]): Promise<void> {
  let delay: number;
  if (Array.isArray(ms)) {
    const [min, max] = ms;
    delay = Math.random() * (max - min) + min;
  } else delay = ms;
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export const setDeceleratingTimeout = (
  callback: () => void,
  factor: number,
  times: number,
): NodeJS.Timeout => {
  const internalCallback = ((tick, counter) => () => {
    if (--tick >= 0) {
      setTimeout(internalCallback, ++counter * factor);
      callback();
    }
  })(times, 0);

  return setTimeout(internalCallback, factor);
};
