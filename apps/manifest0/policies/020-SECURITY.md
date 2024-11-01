# Security Policy

> `020-SECURITY`

## Purpose

Define the security standards and procedures for all systems and applications within Tilli's engineering organization, ensuring data protection, system integrity, and resilience against security threats.

## Description

This policy outlines security requirements, practices, and responsibilities to safeguard Tilli’s infrastructure, applications, and sensitive information. These guidelines are designed to establish secure client authentication and authorization, enforce rate limiting, protect communication, and ensure secure data exchanges.

## Definitions

|                              Name | Definition                                                                                       |
| --------------------------------: | :----------------------------------------------------------------------------------------------- |
|                     Rate Limiting | Controls access to resources by limiting the number of requests within a specified time frame.   |
|              Client Authorization | Process to verify if a user has permission to access certain resources.                          |
|             Client Authentication | Verification of user identity to access systems and applications.                                |
|                  Security Headers | HTTP headers set to enforce secure communications and data handling.                             |
|    Server-to-Server Communication | Secure exchange of data between two or more servers.                                             |
|     Content Security Policy (CSP) | Defines approved content sources to restrict inline scripts and other risky content.             |
|  Strict Transport Security (HSTS) | HTTP header that enforces HTTPS connections by default.                                          |
|                   X-Frame-Options | HTTP header to prevent clickjacking attacks.                                                     |
|            X-Content-Type-Options | HTTP header that prevents MIME-type confusion attacks.                                           |
| Multi-Factor Authentication (MFA) | Authentication method requiring two or more verification factors.                                |
|  Role-Based Access Control (RBAC) | Security practice that restricts access based on user roles.                                     |
|                 Mutual TLS (mTLS) | A TLS protocol that requires mutual authentication between client and server.                    |
|          Directory Access Control | Configuration that restricts access to specific server directories.                              |
|                           TLS/SSL | Protocols that secure communication over the internet via encryption.                            |
|                       SSL Pinning | Technique to prevent man-in-the-middle (MITM) attacks by validating server certificates.         |
|       Key Management System (KMS) | System used for managing encryption keys securely, including generation and rotation.            |
|                Secrets Management | A system for securely storing and managing sensitive information such as tokens and credentials. |
|               Deployment Security | Practices to ensure secure deployment processes with controlled access and monitoring.           |
|           Automated Code Scanning | Process that checks source code for vulnerabilities before deployment.                           |
|           Environment Segregation | Maintaining separate environments (development, testing, production) to control access.          |
|        Post-Deployment Monitoring | Monitoring application and server activity for security anomalies after deployment.              |
|           Data-at-Rest Encryption | Encrypting stored data to protect it from unauthorized access when not in use.                   |
|        Data-in-Transit Encryption | Encrypting data as it is transmitted between systems to prevent interception.                    |

## Ownership

The security policy is enforced by the Developer Security Operations Team (DevSecOps, which is our Infra team), in collaboration with Product Owners and code owners. DevSecOps oversees the implementation and maintenance of security protocols, while Product Owners and code owners ensure compliance within their respective domains.

## Who is affected?

This policy applies primarily to all members of Tilli's engineering organization, including developers, DevOps, and system administrators, who interact with systems and applications containing sensitive data. Additionally, any third-party vendors or contractors with access to Tilli’s infrastructure are also subject to this policy to ensure consistent security standards across all access points.

## Directives

### Rate Limiting

All APIs and endpoints must have rate limiting enforced to control the number of requests within specified time frames and prevent abuse or denial of service attacks.

- Rate Thresholds: Define maximum request rates per minute, hour, and day based on endpoint sensitivity. High-sensitivity endpoints (e.g., login and payment services) require stricter limits.
- User Segmentation: Apply different rate limits based on user types (e.g., anonymous users, authenticated users, internal users).
- Automated Detection and Throttling: Use automated monitoring to detect rate limit breaches and respond by throttling, rate limiting, or blocking offending clients.
- Logging and Alerts: Log and monitor rate limit breaches, sending alerts for significant anomalies.

### Client Authorization

Enforce robust, role-based access control (RBAC) on all services and applications to restrict data access strictly according to user roles.

- Authorization at Resource Level: Ensure authorization is validated at each resource level, with sensitive endpoints requiring higher levels of access.
- Permissions Review and Revocation: Review permissions quarterly or upon role changes and immediately revoke access when no longer necessary.
- Scope-Based Access: Limit access by scope, ensuring that users and services only have the minimum access needed to perform their functions.

### Client Authentication

Require multi-factor authentication (MFA) and strict password requirements for all client interactions involving sensitive data.

- Password Complexity and Rotation: Enforce password length, complexity, and regular rotation (every 90 days for high-sensitivity roles).
- Session Management: Invalidate sessions after a period of inactivity (e.g., 15 minutes) and upon logout to prevent session hijacking.
- Logging and Monitoring: Monitor all authentication attempts, flagging unusual activities (e.g., multiple failed logins) for potential investigation.

### Security Headers

Enforce security headers on all web-based applications to protect against common attacks like XSS, clickjacking, and data injection.

- Content Security Policy (CSP): Define approved content sources to restrict inline scripts and other risky content.
- Strict Transport Security (HSTS): Enforce HTTPS by default and apply the HSTS header for secure connections.
- X-Frame-Options: Set to DENY or SAMEORIGIN to prevent clickjacking.
- X-Content-Type-Options: Use nosniff to prevent MIME-type confusion attacks.

### Server to server communication

Policy: Secure all inter-service communication with TLS encryption and enforce mutual TLS (mTLS) for highly sensitive communications.

- Certificate Management: Rotate TLS certificates every six months and use automated renewal processes where feasible.
- Access Control: Define strict IP whitelists and firewall rules to limit server-to-server communications to approved sources.
- Activity Logging: Log all server-to-server requests, reviewing logs weekly for unauthorized attempts or anomalies.

### Web server

Configure all web servers to minimize the attack surface and enforce strict security standards.

- Disable Unused Modules: Deactivate any unused server modules and services.
- Directory Access Control: Restrict access to server directories to prevent directory listing vulnerabilities.
- Request Size Limitations: Enforce limits on request sizes to prevent buffer overflow and denial-of-service attacks.

### TLS/ SSL

All services accessible over the internet must use TLS (at least version 1.2) with SSL/TLS certificates that meet minimum encryption standards.

- Certificate Verification: Use trusted Certificate Authorities (CAs) and reject self-signed certificates in production.
- Cipher Suites: Use strong cipher suites and disable outdated protocols (e.g., SSL v3, TLS 1.0).
- Vulnerability Monitoring: Regularly scan for TLS/SSL vulnerabilities and rotate keys annually or upon known compromise.

### SSL Pinning

Enforce SSL pinning in all mobile applications and clients to prevent man-in-the-middle (MITM) attacks.

- Certificate Management: Pin the server’s certificate or public key and maintain an update cycle aligned with the certificate rotation.
- Fallback Prevention: Disable fallback mechanisms for SSL pinning failures to prevent compromising secure communications.
- Automated Checks: Implement automated tests to verify SSL pinning at each release.

### Data Encryption

Encrypt sensitive data both at rest and in transit, with AES-256 as the minimum standard for data-at-rest encryption.

- Encryption Key Management: Use a secure key management system (e.g., AWS KMS) to handle key generation, storage, and rotation.
- Data Minimization: Encrypt only necessary data, following the principle of data minimization to reduce encryption overhead.
- Access Control: Limit encryption key access to only authorized systems and personnel with periodic access reviews.

### Secret Storage, Retention, and Retrieval

All sensitive information, such as API keys, tokens, and credentials, must be stored securely using a vault or dedicated secrets management system.

- Storage Protocols: Store secrets using a dedicated secrets management service (e.g., HashiCorp Vault) and apply access controls.
- Rotation and Expiration: Rotate secrets every 90 days or upon personnel changes and set expiration dates for temporary credentials.
- Audit Logging: Log and audit all access to secrets, performing quarterly reviews to identify unusual access patterns.

### Deployment Security

Deployments must follow a secure, automated process with checks to prevent unauthorized access or modifications.

- Environment Segregation: Maintain separate environments for development, testing, and production with strict access controls for each.
- Automated Code Scanning: Implement continuous integration tools that scan code for vulnerabilities before each deployment.
- Access Control for Deployment: Limit deployment permissions to authorized personnel and use MFA for production deployment access.
- Post-Deployment Monitoring: After each deployment, monitor the application for security anomalies, reverting changes if vulnerabilities are detected.

<!--
       Policy directives enumerate rules/ regulations/ guidelines and affected activities or work.
       Directives should be as objective as possible; in cases where subjectivity is required it should be explicitly noted as such (i.e. "at the discretion of CODEOWNER").
   -->

## Enforcement

- **Code Owners (Developers)**:
  - Responsible for implementing rate limiting, authentication, and authorization controls within application code.
  - Responsible for configuring security headers for all public-facing applications.
- **DevSecOps Team (Infra)**:
  - Manages server-to-server communication configurations, including TLS and mTLS setups.
  - Ensures that all deployments follow secure configurations and enforce required security headers.
- **Security Officers (Product Owners)**:
  - Conduct regular security audits and penetration tests to identify vulnerabilities.
  - Oversee compliance with security policies and ensure that enforcement mechanisms are in place.
