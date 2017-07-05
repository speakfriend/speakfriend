create schema api;

create table api.submissions (
  id  serial primary key,      -- I do not know if "serial" or "primary key" are needed
  name text not null,          -- the user who submitted a talk
  email text not null,         -- the potential speaker's email
  description text not null    -- The description / summary of a speaker's pitch/talk
);


create role web_anon nologin;
grant web_anon to postgres;

grant usage on schema api to web_anon;
grant select on api.submissions to web_anon;
