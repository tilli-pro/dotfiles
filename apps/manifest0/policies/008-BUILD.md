# Builds and Releases

> `008-BUILD`

## Purpose

To define the standards and procedures for building software within Tilli's engineering org.

## Description

This policy outlines the process for compiling and assembling code into deployable artifacts. It ensures that the build process is efficient, reliable, and repeatable across different environments. The policy focuses solely on the build process, separate from testing and deployment.

## Definitions

|     Name | Definition                                                      |
| -------: | :-------------------------------------------------------------- |
|    Build | The process of converting source code into executable software. |
| Artifact | A compiled, packaged version of the software.                   |

## Ownership

The build team or DevOps engineers responsible for maintaining build pipelines are the owners of this policy.

## Who is affected?

Developers and build engineers involved in creating, maintaining, and running the build process.

## Directives

### Automation

The build process must be automated to the fullest extent possible.

### Artifacts

Builds should generate artifacts that are consistent and reproducible across environments.

### Versioning

The build process must include versioning for established products to track the outputs.

Artifacts from a build process must always be assignable to a git commit hash in version control that produced the build.

## Enforcement

Build failures are monitored and must be addressed promptly by the responsible teams. Build pipelines must include automated notifications for failures.

- i.e. via GitHub Actions
