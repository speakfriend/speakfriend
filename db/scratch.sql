create schema api;

-- Roles ################################################

create role web_anon nologin;
grant web_anon to postgres;
grant usage on schema api to web_anon;

-- Submission Table #####################################

create table api.submissions (
  id  serial primary key,      -- I do not know if "serial" or "primary key" are needed
  name text not null,          -- the user who submitted a talk
  email text not null,         -- the potential speaker's email
  description text not null    -- The description / summary of a speaker's pitch/talk
);

grant select, insert on api.submissions to web_anon;

-- I don't know what this does; but it's necessary to make post reqs
grant usage, select on sequence api.submissions_id_seq to web_anon;

-- Host Spots Table #####################################

create table api.spots (
  id serial primary key,
  event text not null,
  brief text not null,
  details text not null
  -- TODO: setup a date picker on front end / figure out how to handle dates in sql.
);

-- TODO: swap web_anon for "host user" when authentication is built:
grant select, insert on  api.spots to web_anon;
grant usage on sequence api.spots_id_seq to web_anon;
