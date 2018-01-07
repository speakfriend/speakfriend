# Speak Friend roadmap

Welcome to the Speak Friend roadmap! Read this document to learn more about
where the project is going, and where it came from.


## 0.1 Google Form Parity [ Current ]

- View the [Milestone](https://github.com/speakfriend/speakfriend/milestone/1)
  for technical details (issue / feature breakdown)
- Goal: Create the same functionality as the google form for those who submit
  and those would would view submissions.
- Generally this will involve:
  - create a **client** ui with a form that matches the google form.
  - create a **server** for processing this form via a REST API.
  - create a **database*** for storing form submissions.
  - Allowing for organizers/hosts the ability to view submissions.
    - these should be private, those who submit should know who has access to
    their data and where it's going / being stored. This will involve:
    - Building authentication / authorization.


## 0.2 Submitter Abilities: [ ideating ]
- When someone submits a proposal or talk they should be able to have access to
  it after the fact.
- Ideally, at least at first, submitters shouldn't need to login just to submit
  a talk proposal. We should research a solution for being able to access a
  submission, and perhaps be able to perform CRUD ops on it.
- we could acheive this by generating a unique link for each submission that can
  be revisited.

---

# Long Term / Goals

**What will (could) this tool do?**

Discussions on Speak Friend's features and abilities have previous wondered into
the following realms and speculations:

- connecting mentors with
  mentees
- Making the tool easily installable, accessible, and useable.

