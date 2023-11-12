# Workflow 
It refers to a set of conventions and procedures that dictate how developers collaborate on a project using Git as the version control system. Git workflows help manage and track changes to the source code, making collaboration more efficient and organized.

## Requirements

To configure prettier and ESLint and run on commit.
Install Jest and cypress for unit and e2e testing.

 ### Installation
 - ### Jest
    Jest is one of the most popular unit JavaScript unit testing frameworks.
    It can install and npm i using the command:
         npm i -D jest@29.2.0.
 - ### Cypress
    Cypress is a JavaScript based framework that runs in the browser and
    a popular e2e testing framework.
    To use cypress, install it with the command:
        npm i -D cypress eslint-plugin-cypress

## Configure
- ## Jest
    Install ESLint and configure then run this command :
        npx eslint --init
    To ensure that the tests can use a modern syntax with Jest.
    Install and configure Babel with this command:
        npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4

- ## Cypress
    Install ESLint and configure then run this command :
        npx eslint --init
    Update .eslintrc.json with configuration data for linting Cypress tests
    For Cypress, use the Electron browser for e2e testing.
 
## Running the project
    On commit prettier and eslint will run for formatting.
- ## Jest
    . running command `npm run test-unit` will run unit tests for login and logout.
          "test": "npm run test-unit",
         "test-unit": "jest"

- ## Cypress
     running `npm test-e2e` will open cypress and you can run end to end testing, testing files are locate in               
      /cypress/e2e/assignment

         "test-cypress": "npm run test-e2e",
         "test-e2e": "cypress open"
## Deployment
    Using GitHUb Action
    On merge or on push in master branch will trigger to deploy to github pages 



