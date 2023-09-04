# Kokpit - TCC (Back-end)
This the introduction of our Final Paper Project, here you will find links such like the REST API docs, intructions to build and run, and finally, status of features, parsed by git branches.

## REST API Documentation
You can find the full REST API doc in this link.

## Instrutions to build:
You must have Node.js at least in 16.04 LTS and NPM 9.1.3 and Yarn (Optional) 1.22.19
Then you can follow this commands:
```bash
yarn install # For yarn
npm i # for npm
```

Then configure the `.env` file. A file sample can be found in `.env.example` the app uses this Envoriment Variables (Exemple of `.env.example`) **Do not pull `.env` file in production**:
```c
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=2YqS-zuClW_mT8P_apy4becgu8g-ah4G
DRIVE_DISK=local
DB_CONNECTION=mssql
MSSQL_SERVER=localhost
MSSQL_PORT=1433
MSSQL_USER=lucid
MSSQL_PASSWORD=
MSSQL_DB_NAME=lucid
```
Feature status:
![Static Badge](https://img.shields.io/badge/Status-Feature%20request-darkmagenta?style=flat-square)  - Feature was request beyond the func. requirements

![Static Badge](https://img.shields.io/badge/Satus-Backlog-white?style=flat-square) - Feature to get started.

![Static Badge](https://img.shields.io/badge/Satus-Doing-yellow?style=flat-square) - Feature being developed, soon in repository.

![Static Badge](https://img.shields.io/badge/Satus-Done-darkgreen?style=flat-square) - Feature done and in repository.

![Static Badge](https://img.shields.io/badge/Satus-Ready-navy?style=flat-square) - Feature tested and runing in production.


|Feature| Status | Branch |
|--|--|--|
| Create company | ![Static Badge](https://img.shields.io/badge/Ready-navy?style=flat-square) | main |
| Get all companies | ![Static Badge](https://img.shields.io/badge/Ready-navy?style=flat-square) | main |
| Create a user | ![Static Badge](https://img.shields.io/badge/Done-darkgreen?style=flat-square) | main |
| Login as User | ![Static Badge](https://img.shields.io/badge/Done-darkgreen?style=flat-square) | main |
| Get all users | ![Static Badge](https://img.shields.io/badge/Done-darkgreen?style=flat-square) | main |
| Create a project | ![Static Badge](https://img.shields.io/badge/Done-darkgreen?style=flat-square) | main |
| Get all projects | ![Static Badge](https://img.shields.io/badge/Done-darkgreen?style=flat-square) | main |
| Assosiate somebody to a project | ![Static Badge](https://img.shields.io/badge/Doing-yellow?style=flat-square) |  |
| Create tasks | ![Static Badge](https://img.shields.io/badge/Doing-yellow?style=flat-square) |  |
| Companie's banner image | ![Static Badge](https://img.shields.io/badge/Feature%20request-darkmagenta?style=flat-square) |  |


