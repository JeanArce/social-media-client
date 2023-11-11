# Workflow 
It refers to a set of conventions and procedures that dictate how developers collaborate on a project using Git as the version control system. Git workflows help manage and track changes to the source code, making collaboration more efficient and organized.

## Requirements

To configure prettier and ESLint and run on commit.
Install Jest and cypress (unit and e2e testing)

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

1. On commit prettier and eslint will run for formatting. It triggers currently in workflow-formatting branch
2. running command `npm run test-unit` will run unit tests for login and logout
3. running `npm test-e2e` will open cypress and you can run end to end testing, testing files are locate in /cypress/e2e/assignment
4. On merge or on push in master branch will trigger to deploy to github pages 

## Dev Dependencies 

"@babel/core": "^7.19.3",
"@babel/preset-env": "^7.19.4",
"cypress": "^13.4.0",
"eslint": "^8.52.0",
"eslint-plugin-cypress": "^2.15.1",
"eslint-plugin-jest": "^27.6.0",
"jest": "^29.2.0",
"jest-localstorage-mock": "^2.4.26",
"live-server": "^1.2.2",
"sass": "^1.54.8"

## Running the project
- ## Jest
    "test": "npm run test-unit",
    "test-unit": "jest"
- ## Cypress
    "test-cypress": "npm run test-e2e",
    "test-e2e": "cypress open"



