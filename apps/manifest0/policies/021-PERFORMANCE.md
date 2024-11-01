# Performance Policy

> `PERFORMANCE`

## Purpose

To establish guidelines and configurations for ensuring optimal performance across Tilli's server and application environments, covering everything from server throughput to process management and resource utilization.

## Description

This policy defines standards for configuring Nginx, PM2, and pnpm, along with Node.js version management to achieve high performance, scalability, and reliability in Tilli’s applications. It also specifies throughput benchmarks for both render (e.g., Next.js SSR) and non-render actions to support consistent application responsiveness.

## Definitions

|               Name | Definition                                                                                            |
| -----------------: | :---------------------------------------------------------------------------------------------------- |
|              Nginx | A web server that serves static content, proxies requests, and improves load balancing.               |
|                PM2 | A process manager for Node.js that helps manage applications and ensures uptime.                      |
|      PM2 Logrotate | A PM2 module that handles log rotation to prevent disk overflow and maintain efficient logging.       |
|               pnpm | A fast package manager for Node.js that saves disk space and accelerates installs.                    |
|            Node.js | A JavaScript runtime for server-side development, managed with version manager NVM.                   |
| Non-render Actions | Actions performed by the server that do not involve rendering (e.g., API calls).                      |
|     Render Actions | Actions that require rendering of the front-end, particularly server-side rendering (SSR) in Next.js. |
|                DAU | Daily Active Users                                                                                    |

## Ownership

Developers, DevOps engineers, and system administrators are responsible for enforcing this policy by maintaining configurations and monitoring performance metrics.

## Who is affected?

This policy impacts all Tilli engineering members involved in application development, deployment, and server management, as well as contractors with access to configuration files or the deployment pipeline.

## Directives

### Nginx Configuration

- All Nginx configurations must optimize load balancing, caching, and request handling to support high traffic. Specific configurations should include:
  - Caching static assets for defined intervals to reduce load on the origin server.
  - Enabling HTTP/2 for faster asset delivery and concurrent requests.
  - Configuring connection timeout settings to handle high-traffic scenarios without overloading resources.
- Nginx configurations should be monitored and adjusted based on load testing results and evolving application requirements.

### PM2 Configuration

- PM2 must be used to manage Node.js processes with auto-scaling capabilities configured for each environment.
- Ensure that PM2 memory limits and instance scaling are optimized for each server’s capacity, with process limits established to prevent resource exhaustion.
- All production processes should use `max_memory_restart` to prevent memory leaks and ensure application stability.

### PM2 Logrotate Configuration

- Configure PM2 Logrotate to rotate logs daily, with log retention configured based on storage limits and compliance needs.
- Rotate logs to manage storage and prevent overflow, particularly in high-throughput environments.
- Set log rotation size limits (e.g. 100 MB) and configure compression to optimize disk usage without affecting application performance.

### pnpm Behavior

- pnpm must be used for package management to ensure efficient disk space usage and faster installation times, particularly in monorepo setups.
- Implement pnpm's caching features to accelerate builds and reduce build times during CI/CD deployments.
- Regularly audit pnpm configurations for updates that may enhance speed or stability, especially in conjunction with Next.js dependencies.

### Node.js Versions and NVM Behavior

- Node.js versions must be consistent across development and production environments to avoid compatibility issues.
- Use NVM to manage and switch between Node.js versions, specifying a single Node.js version for each environment.
- Regularly upgrade Node.js versions to the latest stable release, with testing in staging environments before production deployment to ensure compatibility and performance improvements.

### Server Throughput

- **Non-render Actions**  
  Servers must be able to handle at least 5x the monthly rolling DAU (daily active users) average in requests per second (RPS) for non-render actions (e.g., REST API calls) in production. Non-render actions should be stateless, efficiently cached, and tuned for minimal response time.

- **Render Actions (e.g., Next.js SSR)** [_TO BE REVISITED_]  
  Render actions should target a baseline of 100 RPS in production with optimized caching, efficient data loading, and performance-based SSR configurations. Use of Next.js incremental static regeneration (ISR) should be prioritized where possible to reduce SSR load.

## Enforcement

- **Developers**

  - Must ensure that code and configuration changes are optimized for performance, particularly regarding SSR in Next.js and pnpm dependency management.
  - Conduct load testing to verify performance benchmarks are met and adjust code or dependencies as needed.

- **DevOps Engineers**

  - Oversee Nginx and PM2 configurations, regularly monitoring for performance bottlenecks.
  - Maintain Node.js version consistency and monitor server health, optimizing memory and CPU usage as required.
  - Ensure PM2 Logrotate is configured and functioning as expected, reviewing logs to address issues before they impact performance.

- **System Administrators**
  - Monitor server throughput, adjusting resources as needed to maintain performance benchmarks.
  - Maintain system-level optimizations for Nginx and PM2 to balance load across the infrastructure.

Performance is enforced through regular automated testing pipelines and manual performance audits conducted by the DevOps team. Failure to meet performance benchmarks may result in project delays or a rollback of changes until necessary optimizations are applied.
