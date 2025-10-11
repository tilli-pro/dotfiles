/**
 * @fileoverview Custom rules built for Tilli Software (@tilli-pro)
 * @author Tilli Software
 */

import noConditionalLiteralsInJsx from "./rules/no-conditional-literals-in-jsx.js";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const allRules = {
  "no-conditional-literals-in-jsx": noConditionalLiteralsInJsx,
};

const rulesConfig = {
  plugins: ["@tilli-pro"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  rules: {
    "@tilli-pro/no-conditional-literals-in-jsx": 2,
  },
};

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

export default {
  rules: allRules,
  configs: {
    recommended: rulesConfig,
    all: rulesConfig,
  },
};
