## This is a simple Cypress in order to learn and build up
****
## Tech stacks
* Cypress package version: 13.10.0
* Cypress binary version: 13.10.0
* Electron version: 27.3.10
* Bundled Node version: 18.17.1


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
* #### To run on different environment
```shell
$ cypress run --config-file cypress.config.js
```
* #### To run on browserstack
```shell
$ browserstack-cypress run
```
* #### To generate allure report after test finished
```shell
$ allure generate --clean
```