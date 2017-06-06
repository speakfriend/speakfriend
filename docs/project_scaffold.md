<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [PostgREST API Starter Kit](#postgrest-api-starter-kit)
  - [Features](#features)
  - [Directory Layout](#directory-layout)
  - [Getting Started](#getting-started)
  - [Testing](#testing)
    - [Deploying PostgREST and OpenResty](#deploying-postgrest-and-openresty)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

[Originally sourced from postgrest-starter-kit](https://github.com/subzerocloud/postgrest-starter-kit)

# PostgREST API Starter Kit

**PostgREST API Starter Kit** is a boilerplate and tooling for authoring **data API**
backends with [PostgREST](https://postgrest.com).

## Features


## Directory Layout

```bash
.
├── db                        # Database schema source files and tests
│   ├── src                   # Schema definition
│   │   ├── api               # Api entities avaiable as REST endpoints
│   │   ├── data              # Definition of source tables that hold the data
│   │   ├── pgjwt             # JWT util functions
│   │   ├── request           # HTTP request helper functions
│   │   ├── roles             # Application level roles and their privileges
│   │   ├── sample_data       # A few sample rows
│   │   └── init.sql          # Schema definition entry point
│   └── tests                 # pgTap tests
├── openresty                 # Reverse proxy configurations and Lua code
│   ├── lualib
│   │   └── user_code         # Application Lua code
│   ├── nginx                 # Nginx files
│   │   ├── conf              # Configuration files
│   │   └── html              # Static frontend files
│   ├── tests                 # Mocha based integration tests
│   │   ├── rest              # REST interface tests
│   │   └── common.js         # Helper functions
│   ├── Dockerfile            # Dockerfile definition for production
│   └── entrypoint.sh         # Custom entrypoint
├── postgrest                 # PostgREST
│   └── tests                 # Simple bash based integration tests
├── docker-compose.yml        # Defines Docker services, networks and volumes
└── .env                      # Project configurations

```


## Getting Started

Make sure that you have [Docker](https://www.docker.com/community-edition) v17 or newer installed, clone the repo and launch the app with [Docker
Compose](https://docs.docker.com/compose/):

```bash
docker-compose up -d            # Launch Docker containers
```

The API server must become available at [http://localhost:8080/rest](http://localhost:8080/rest).
Try a simple request

```bash
curl http://localhost:8080/rest/items?id=eq.1
```

## Testing

```bash
npm install                     # Install test dependencies
npm run test_db                 # Run pgTAP tests
npm run test_rest               # Run integration tests
npm test                        # Run all tests (db, rest)
```

### Deploying PostgREST and OpenResty
We recommend deploying both components (OpenResty/PostgREST) as Docker containers.
You can use [EC2 Container Service](https://aws.amazon.com/ecs/) to help solve a lot of devops problems when deploying containers.
We'll soon provide task definition templates. For PostgREST you can use the official image in production. For OpenResty you will build your own image that is based on the official one but includes all your custom configurations and files.

