# Project Specifications
> `005-PROJECTS`

## Purpose
Define standards for creation and setup of internal or client-facing projects within Tilli's engineering org.

## Description
Software development related projects at Tilli follow a few standard flows in their setup and execution. The policy directives outlined below provide information regarding the order, scope, administration, and execution of these flows.

## Definitions
|Name|Definition|
| --:|:-- |
|x|y|

## Ownership
Project managers and the PMO are responsible for enforcing this policy.

## Who is affected?
All project managers, team leads, and team members involved in project execution.

## Directives
1. Projects must have a defined scope, timeline, and budget.  
Project scope is defined as the set of services/ goods that are meant to be delivered upon project execution. In a software development environment we can generalize scope to delineate a specific set of features and configuration that the client requires for completion of the project.  
Project timelines must include a project start, project end, and broadly have dates set for the following project activities:  

- Requirements Gathering <!-- TODO: include security in requirements gathering + when to execute security-related developments (in between UT + E2E testing)  -->
- Blueprint
- Build Phase
- Unit Testing
- Integration/ E2E Testing
- User Acceptance Testing
- Performance Testing
- Cutover Activities
- Go-Live
- Production Smoke Testing/ post Go-Live support
- Hypercare
- Maintenance

2. All necessary product enhancements MUST be identified during the requirement gathering/ discovery phase of the project to be considered as part of the tentative timeline. The enhancements must be documented in the blueprint which is signed by the relevant stakeholders. If any engineering build changes the scope or a feature of the project, it is considered as a Change Request. 

3. Project risks and external (client) dependencies must be identified, mitigated, and considered early in the project lifecycle, PRIOR to the start of the build phase. Any scope creep or timeline changes must be identified and documented. 

4. Regular project updates and meetings are mandatory.  
The project's primary PM is in charge of setting up status updates and meetings.
Status updates on the project should be delivered in at least weekly intervals using the status update template (or in a format that presents the equivalent information). Status updates should be delivered to both internal and client stakeholders (unless noted otherwise).  
Meetings should involve some type of standup (minimum twice a week) that includes everyone involved in the current phase of the project. Client participation in these meetings is not necessary, but may be beneficial depending on the current project activities. Extra meetings 

## Enforcement
- Project Lead
  - Responsible for setting expectations regarding initial project scope and timeline
  - Responsible for interfacing with client stakeholders
- Lead Project Manager
  - Responsible for developing primary metrics to evaluate health of project
  - Responsible for creating and shipping weekly status reports
  - Responsible for leading the communication with clients for reporting and change management 
- Product Owner
  - Responsible for identifying product enhancements required for project execution
  - Responsible for identifying technical risks in the project and reporting to PMO
  - Responsible for the creation of functional and technical specifications in the project
