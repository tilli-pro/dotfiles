# Testing
> `009-TESTING`

## Purpose
To define the standards and procedures for testing software within Tilli's engineering org., ensuring product quality and reliability prior to release.

## Description
This policy outlines the guidelines for unit testing, integration testing, end-to-end testing, and acceptance testing. The objective is to ensure that all features meet the required standards of functionality, performance, and security before they are delivered to clients or deployed in production.

## Definitions
|Name|Definition|
| --:|:-- |
|Unit Test|A test that checks individual functions or components in isolation.|
|Integration Test|A test that checks how different components of the system work together.|
|End-to-End (E2E) Test|A test that simulates real-world scenarios by testing the entire application flow.|
|User Acceptance Testing (UAT)|User Acceptance Testing (UAT)|

## Ownership
The quality assurance (QA) team, developers, and team leads are responsible for enforcing and adhering to this policy.

## Who is affected?
All developers, QA engineers, product owners, and any team members involved in software development, testing, or delivery.

## Directives
1. **Unit Testing** \
All code must be covered by unit tests that verify the functionality of individual components or functions. These tests should be automated and must run as part of the build process.

2. **Integration Testing** \
Integration tests should ensure that modules work together as intended. These tests must be executed after unit tests and before deployment into a staging or UAT environment.

3. **End-to-End Testing** \
E2E tests must cover critical user flows and ensure that the entire application behaves as expected in a production-like environment. These tests are required before a project moves to UAT or production.

4. **User Acceptance Testing (UAT)** \
Before deploying any new feature or product to production, it must undergo UAT, where business stakeholders validate the product against the requirements. UAT results must be documented.

5. **Performance and Security Testing** \
Performance and security testing should be integrated into the testing lifecycle, especially for large-scale or sensitive applications. Any critical performance bottlenecks or vulnerabilities must be addressed before deployment.

6. **Testing Documentation**
All test cases must be documented, and test results should be made accessible for internal review. Test coverage reports should be produced and reviewed by the QA lead.

## Enforcement
-	**QA Developers:** Responsible for writing unit and integration tests.

-	**QA Team:** Oversees the execution of all test phases, including E2E and UAT and produces resulting test execution document as the deliverable.

-	**Project Manager:** Ensures that testing milestones are met and that issues raised during testing are tracked and resolved. Ensures that test execution document is delivered to client/ additional stakeholders.

-	**Product Owner:** Approves UAT results and signs off on feature readiness for deployment. Identifies risks with testing procedures and provides additional clarification in case of needed testing changes.

Test coverage and compliance are enforced through automated testing pipelines in CI and regular testing audits conducted by the QA team. Failure to meet the testing criteria may result in project delays or rollback of changes.