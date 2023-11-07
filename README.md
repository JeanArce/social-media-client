# Workflow 

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

## Test commands

"test": "npm run test-unit",
"test-unit": "jest",
"test-cypress": "npm run test-e2e",
"test-e2e": "cypress open"



