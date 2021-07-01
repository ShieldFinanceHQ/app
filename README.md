# Shield Finance App

This repo contains the user interface for Shield Finance smart contracts.

## Install

```
# Install nvm: https://github.com/nvm-sh/nvm#installing-and-updating
# Install yarn v1: https://classic.yarnpkg.com/en/docs/install
# Add .nvmrc autoload to ~/.bashrc (optional, recommended): https://gist.github.com/DenisGorbachev/0c321443d9fe684b6d2a9de785420a6a
# Install Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress
nvm use # loads .nvmrc
yarn install
```

## Learn

* Learn [GitHub flow](https://guides.github.com/introduction/flow/) (a variant of [git-flow](https://nvie.com/posts/a-successful-git-branching-model/)):
  * `master` contains [production code](#production-code).
  * `dev` contains [development code](#development-code).
  * `feature/*` contains [feature code](#feature-code).

## Definitions

### Production code

Code that passed automated tests, manual tests, manual review.

### Development code

Code that passed automated tests.

### Specification code

Code that contains a specification of a new feature.

* The specification is a list of tests that don't pass.
* Developer should fix the tests while implementing the specification.
