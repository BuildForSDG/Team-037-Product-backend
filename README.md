Empower Farmer

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f4f54e902f3c40daa2b3ab0b77a65da0)](https://app.codacy.com/gh/BuildForSDG/Team-037-Product-backend/dashboard)

## About

Empower farmer app that helps fund farmer by connecting farmer to sponsor and help farmer sell their product.

## Why
Tech solutions that can help give your local community access to international/advanced farming practices that will help them improve their infrastructure or farming practices.

## Usage

## Heroku Deployment

Application was deployed to Heroku. Use public URL [https://sdg-empower-farmer.herokuapp.com/](https://sdg-empower-farmer.herokuapp.com/) with API endpoints.

## Swagger Documentation

API Documentation was generated with [Swagger](https://sdg-empower-farmer.herokuapp.com/docs).


## Setup

### Getting started

* You need to have Git, Node, NPM and Docker installed on your computer.
* Installing [Node](node) automatically comes with npm.

### Clone

* Clone this project to your local machine `https://github.com/allebd/swapi.git`
  > Run the command below

```shell
   git clone https://github.com/allebd/swapi.git
```

### Setup

* Installing the project dependencies
  > Run the command below

```shell
   npm install
```

* Create a .env file similar to the .env.sample file

* Create your database
  > Run the command below

```shell
  npx sequelize db:migrate
```

* Add tables to database
  > Run the command below

```shell
  npm run db:reset
```

* Start your node server
  > Run the command below

```shell
  npm start or npm run dev
```

* Use `http://localhost:8000` as base url for endpoints

### Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS
| ------ | --------------------------------------- | -------------------------
| POST   | User can signUp as farmer,sponsor,buyer | `/api/v1/auth/createUser`
| POST   | User can sign In                        | `/api/v1/auth/signIn`
| GET    | Get a specific User                     | `/api/v1/auth/user`
| GET    | Login with google                       | `/api/v1/auth/google`
| PATCH  | User can update profile                 | `/api/v1/auth/updateUser`
| POST   | Farmer can create farm                  | `/api/v1/farm/createFarm`
| PATCH  | Farmer can edit a farm                  | `/api/v1/farm/:farmId/editFarm`
| GET    | Retrieve  a farm                        | `/api/v1/farm/:farmId/getOneFarm`
| POST   | Farmer can create a farmProduct         | `/api/v1/product/:farmId/createFarmProduct`
| PATCH  | Farmer can update a farmProduct         | `/api/v1/product/:productId/editProduct`
| GET    | Sponsor view a farm that belong to farmer| `/api/v1/sponsor/:farmId/listOneFarm`
| GET    | Sponsor view all farm                    | `/api/v1/sponsor/listAllFarm`
| GET    | user can view all farm product           | `/api/v1/user/listAllFarmProduct`


### Running Unit Test

* Run test for all endpoints
  > run the command below
  
```shell
  npm test
```
## Authors

[Joshua Lugada - Mentor]
[kolade ore - TTL](https://github.com/koladeore)
[Adekeye Gabriel - BACKEND-DEVELOPER](https://github.com/teezyfortune)
[MrDannie - BACKEND-DEVELOPER](https://github.com/MrDannie)
[Tasiu Kwaplong Saeed - BACKEND-DEVELOPER](https://github.com/tasiukwaplong)

## Contributing
If this project sounds interesting to you and you'd like to contribute, thank you!
First, you can send a mail to buildforsdg@andela.com to indicate your interest, why you'd like to support and what forms of support you can bring to the table, but here are areas we think we'd need the most help in this project :
1.  area one (e.g this app is about human trafficking and you need feedback on your roadmap and feature list from the private sector / NGOs)
2.  area two (e.g you want people to opt-in and try using your staging app at staging.project-name.com and report any bugs via a form)
3.  area three (e.g here is the zoom link to our end-of sprint webinar, join and provide feedback as a stakeholder if you can)

## Acknowledgements

buildforsdg@andela.com
https://buildforsdg.andela.com/projects


## LICENSE
MIT

