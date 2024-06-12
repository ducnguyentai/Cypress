## This is a simple Cypress in order to learn and build up
****
## Tech stacks
* Cypress package version: 13.10.0
* Cypress binary version: 13.10.0
* Electron version: 27.3.10
* Bundled Node version: 18.17.1


****
****
## Necessary installation
* Cypress: npm i -g cypress --save-dev
* Browserstack-Cypress: npm i -g browserstack-cypress-cli
* Cypress reporter: npm i -g --save-dev cypress-mochawesome-reporter
****
## How to use

* #### By default, the tests will run over cypress.config.js file, which will assign `baseURL` and other configs to browser
```shell
$ cypress run
```
* #### To config run in Headless/Headed mode
```shell
$ cypress run --headed/--headless
```
* #### To config run in Designed browser
```shell
$ cypress run --browser [chrome, chrome:beta, edge, firefox]
```
* #### To run on different environment
```shell
$ cypress run --config-file cypress.config.js
```
* #### To run on browserstack
```shell
$ browserstack-cypress run
```
* #### To override existing env variable
```shell
$ cypress run --env <variable>=<value>
```
* #### To generate report after test finished
  * Report will be automatically generated after running test through CLI
* #### All supported env variables
  * baseURL: to assign base URL
  * baseFixturePath: to assign data file