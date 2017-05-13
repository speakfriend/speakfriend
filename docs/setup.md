<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Development Setup.](#development-setup)
  - [Build Process](#build-process)
- [Styling](#styling)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Development Setup.

Overview: This document serves as a guide to get your dev environment up and running, covering edge cases / things not covered in the README.md.

## Build Process

- we use a `Procfile` with node foreman for running all the processes we need.
- Each line in this filecorresponds to a process that runs a part of our stack. This could be Elm, sass, an api, dummy data etc.
- If you want to debug a specific process while developing, feel free to comment out the process below, and run it in a seperate terminal.

# Styling

- we use scss for handling our styles.
- #3 Scss notes notes
    - Avoid nesting whenever possible; we are using sass to leverage variables and mixins more so than easy css nesting:
    - Nesting, if used should be no more than 2 layers deep; it is particularly useful for pseudo selectors like `:hover` etc.
    - Only our `main.scss` file gets compiled down to css -> at the `/dist` folder.
    - Make sure you `@import` new files into the main.scss file. This might change to keeo our SCSS files cleaner / free of imports, but for now we want to leverage a simpler build process over complex.
