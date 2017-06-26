<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Styling Overview](#styling-overview)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Styling Overview

- we use SCSS for handling our styles.
- Avoid nesting when possible; we are using sass to leverage variables and mixins more than easy css nesting:
    - Nesting, if used should be no more than 2 layers deep; it is particularly useful for pseudo selectors like `:hover` etc.
- Only our `main.scss` file gets compiled down to css -> at the `/dist` folder.
- Make sure you `@import` new files into the main.scss file. This might change to keeo our SCSS files cleaner / free of imports, but for now we want to leverage a simpler build process over complex.
