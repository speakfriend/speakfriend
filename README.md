<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [speakfriend](#speakfriend)
- [Setting up the repo](#setting-up-the-repo)
- [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# speakfriend
[![AllContributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Application to connect speakers and those who wants them to speak.

# Setting up the repo

There are three parts to our application right now:

**Client**: This is the front end. It is written in Preact. It uses webpack under the hood of Preact-CLI.

**Api**: Our api is served by POST**GREST**.

**DB**: Our db is in Postgres.

Let's install our stack!

1. [Download and install postgrest](https://postgrest.com/en/v4.1/install.html) (< instructions on the page linked )
2. Move the downloaded binary of _postgrest_ into the root of our project folder
3. Install our dependencies

```sh
make install
```

4. Run the entire stack

```
make start
```

Note: you can run each part of the stack independently; for example, start the client with:

```sh
npm run start-client
```


# Contributors

Thanks goes to our contributors ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/12987958?v=3" width="80px;"/><br /><sub>Tyler</sub>](http://tylersloane.com)<br />[💻](https://github.com/speakfriend/speakfriend/commits?author=teesloane "Code") [📖](https://github.com/speakfriend/speakfriend/commits?author=teesloane "Documentation") [🔧](#tool-teesloane "Tools") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
