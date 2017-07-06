<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Terminology](#terminology)
- [0.1](#01)
  - [Speakers:](#speakers)
  - [Organizations](#organizations)
- [0.2](#02)
  - [Speakers:](#speakers-1)
  - [Organizations](#organizations-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Terminology

Before identifying what our user stories are, we will try and keep an updated list of the teminology used to describe our platform. Sometimes user stories will be broken up by types of user.

**Speaker**: Any person who wants to speak on a topic and is looking for a spot to do so. A "Speaker" is considered a user.

**Topic / Proposal / Submissions**: A speaker's ideas that they are interested in speaking on. Could have varying levels of details.

**Organizer/Organiation**: Any person or group of people who runs events that facilitate speakers / runs "talks". Considered a user.

**Spot** : A window of time in which an organizer would like to have a speaker give a talk.

**Facilitated** : Describes an organization that is able to host / run a speaker's talk.

# 0.1

## Speakers:

Main goal: As a speaker I can use `SpeakFriend` to submit a talk/idea that can be considered and be facilitated by relevant organizations.

Stories:

- As a speaker, I can submit my name, email and a simple description of my topic.
- As a speaker, on submitting my idea, I can keep a record of my submission (through a generated link)
- As a speaker, I will have a general idea of organizations that have open / upcoming `spots`

## Organizations

Main Goal: As an organization we can use `SpeakFriend` to indicate open `spots` for speakers and the kind of topics we are happy to present.

- As an organizer, I can present upcoming `spots` that people can consider for speaking


# 0.2

## Speakers:

- As a speaker, I can be sure that my information is secure and that my ideas are only shown to organizations based on a specific criteria (example, I only want organizations within `city of x` to be able to see submissions)
    - similarly, if I'm viewing the "page" for my submission, I want to be sure that
    no one can just input a simple id into a route to view my submission.
- As a speaker, I can automatically be reminded when I have an upcoming talk.


## Organizations

- As an organizer, I can provide extra details about our organization, our events, and the topics we are interested in.
- As an organizer, I can book a speaker for a spot and automate organizing all the details they need to know to successfully speak.
- As an organizer, I can provide feedback that could guide a speaker towards tailoring their talk to best suit my organization / our audiences.
