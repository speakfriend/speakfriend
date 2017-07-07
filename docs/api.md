<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Overview](#overview)
- [Installing](#installing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Overview

# Installing

- [Download and Install postgrest](https://postgrest.com/en/v4.1/install.html)
- It might be worth moving the postgrest binary to your /usr/bin so it can be executed without the binary having to exist in your project root


## Misc notes on docker, pg, etc

### inputting raw sql files into postgres-in-docker

```
Joe Nelson @begriffs Jul 05 23:45
@teesloane since you're running psql inside the container as well, you can copy a file in, like
docker cp foo.sql tutorial:.
Then from psql run \i foo.sql

Joe Nelson @begriffs Jul 05 23:51
If you're putting together a long term project you might want to use a real postgres instance though rather than a docker container, or find a way to make a persistent volume so you don't lose your work.
```

### docker + pg and where the data lives

```
@teesloane you can configure the data volume
to be mapped to a folder you want
like
```
```
postgres:
    build:
      context: .
      dockerfile: .docker/postgres.${APP_ENV}.dockerfile
    ports:
      - "5432:5432"
    healthcheck:
      test: "pg_isready -h localhost -p 5432 -q -U postgres"
      interval: 3s
      timeout: 5s
      retries: 5
    volumes:
      - ./data/postgres:/var/lib/postgresql/data
      - ./.docker/postgres_scripts/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d
    env_file:
      - ./.docker/env/postgres.${APP_ENV}.env
    networks:
      - some-network
```
