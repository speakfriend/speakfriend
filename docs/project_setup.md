<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Development Setup.](#development-setup)
  - [Build Process](#build-process)
  - [Working without Docker](#working-without-docker)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Development Setup.

Overview: This document serves as a guide to get your dev environment up and running, covering edge cases / things not covered in the README.md.

## Build Process

- we use docker to run our stack. There are several reasons to consider Docker for now, including:
  - to avoid users having to go through the pain of setting up a dev environment for every component of the app locally;
  - making the dev environment match the prod environment
  - hopefully making deployment easier

## Working without Docker
- Docker is not mandatory; you may run your processes independently.
- If you want to debug a specific process while developing, you can enter the directory for each part of the app and run their respective build tasks.

# Setting up

Make sure that you have [Docker](https://www.docker.com/community-edition) v17 or newer installed, clone the repo and launch the app with [Docker
Compose](https://docs.docker.com/compose/):

```bash
docker-compose up -d            # Launch Docker containers
```
