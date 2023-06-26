# Hangil IOT Backend
## NodeJs, Express - Sequelize Backend IOT Server 

[![N|Solid](https://static.wixstatic.com/media/f9f09b_0e2f9f82431f4ae694b39f6002acd35b~mv2.png/v1/crop/x_0,y_0,w_322,h_287/fill/w_47,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f9f09b_0e2f9f82431f4ae694b39f6002acd35b~mv2.png)](https://www.hangilhc.com/)

New version of Hangil IOT server, based on Javascript making use of [Express](https://expressjs.com/) Framework (Web Project - Views & Routes), and [Sequelize](https://sequelize.org/docs/v7) (Database Connection, Models, Migrations, Seeders, custom querys...)

Offering a Web service as REST-API Only were any other web service with the right credentials could inquiry information related to Hangil IOT core services.

### CONTENTS

- [Installation](#installation)
- [Basic commands](#Basiccommands)
- [REST API anatomy](#restapianatomy)
- [Code Version Control - Git & Github]()
- [License](#license)

---
## Installation

in order to run locally in a computerit is required to have a Linux environment with nodejs installed and mysql process db running in the same computer, personally I use a Mysql docker container and in the future the project is planned to be set up to run as a docker container too.

- ##### Download and instiate source code from repository ...  [Github Repository <--](https://github.com/Filip9322/hgIOTBack)

 ```sh
git clone git@github.com:Filip9322/hgIOTBack.git
```
Once the files are completely downloaded, go inside the folder 
 ```sh
cd hgIOTBack
```
- ##### Installing dependencies

For all nodejs projects is required to install the libraries and dependencies, these are defined in the file `package.json`.
to install all package at one run the following command while being in the root of the project folder.
 ```sh
npm i  
```
- ##### Check the Database is Running and is ready for connection

It is required to have a MyPostgres DB running in the background, for access to the database credentials, URL and PORT could be defined in a new file .env at the root of the folder
 ```sh
vi .env
```
For using Vim there are a few simple commands to create, and modify the file content easy and quickly.
| Key | Action |
| ------ | ------ |
| i | insert new code |
| esc | stop modification |
| :q | exit file |
| :w | save modifications |
| u | undo |
 ```sh
DB_PORT=3306
MYSQL_DATABASE=db_name
MYSQL_USER_DATABASE=db_username
MYSQL_USER_PASSWORD=db_password
MYSQL_ROOT_PASSWORD=db_root_password
MYSQL_HOST=db_host
DB_DIALECT=mysql
NODE_ENV=DEVELOPMENT
TOKEN_KEY=unique_token_for_encoding


SEQUELIZE_ADMIN_USER=sequelize_admin_user
SEQUELIZE_ADMIN_PASS=sequelize_password
SEQUELIZE_ADMIN_EMAIL=sequelize_email
```
---
## Basic commands
- ##### Migrations 

Migrations and seeds should be running only once when instantiated the API service for the first time .

** to Run Migrations:
 ```sh
npm run migrate:up
```
** rollback ( Delete all tables & data)
```sh
npm run migrate:undo
```
- #####  Seeds

To run insertion of seeds. (Seeds are referred to initial data that fill rows into the tables and brings initial data usefull for testing)
 ```sh
npm run seed:up
```
** rollback ( Delete all tables & data)
```sh
npm run seed:down
```
---
## REST API anatomy
- ##### Host & REST API

By defaulft server runs in the port :3000, and all end points refered to the REST-API are localted under `/api`
```sh
http://localhost:3001/
http://localhost:3001/api
http://localhost:3001/api/local_areas
```

Request possible: GET, POST, UPDATE, DELETE
Every table has a End Point with all four options to : CREATE, READ, UPDATE, DELETE
*/DELETE does not really delete the row instead change value `is_deleted` into true/*

- ##### REST API CONTROL

To always keep in control who modifies and when data from the db there 4 required columns in every table
| Column | Description |
| ------ | ------ |
| user_mod | Saves the id of the last user that modified the row |
| is_deleted | Data is never deleted it is simply moved into `is_deleted=true` |
| createdAt | Saves as a Date when the row was inserted |
| updatedAt | Saves as a Date when was the last time row were modified |

- ##### Models

When data is consulting the Sequelize library under the anatomy of the table model would asses to correctly read and return data from the database. It means all tables should have a model that defines every column nature from type of data, allow Null, autoIncrement, primary Key, and relations of foreigner keys.
Refer to `sequelize/models/users.model.js` 

Each Model should be registered manually in `sequelize/index.js` is important to keep a camelCase pattern form naming Tables and Models and they constantly referred by migrations, seeds, routes, and custom queries.

- ##### Routes

So while all the database queries are sorted by Sequelize library is express who allow us to have a web service and manage different routes to consult different information of the database, trough express we do the user authentication when validating credentials, and is important to mention that a REST API has no views only deliver raw data.

Under `express/routes` & `express/routes/API` could be found all data that is being processed before delivering to the website that requested, there are specific cases qhere not only there is consultation of data but as well association and coding and decoding of tokens.

Based on the data requested there could be a sucessfully retrieved data but in case of error please follow the next table.

| Code | meaning |
| ------ | ------ |
| 200 | No error found and there was a response to the request |
| 201 | Sucessfull Response |
| 400 | Bad request: Error with headers or Body  |
| 403 | Forbidden Access: lack of permission or missing required credentials|
| 404 | Not found: row or route does not exist |

- ##### Custom EndPoints 

The following END POINTS
`express/routes/login.js` and `express/routes/map_full_list.js`  does not only consult data from the database, they code or decode tokens and attached to the json that would be delivered as an answer, data from one common element distribuited in different tables could be compiled and organized in the object to be delivered.

Is important to mention that data consulted in the server side always brings all data in object under `object.dataValues`, it means that because of the same newly attached data should go under this sub-object.

---
## Code Version Control - Git & Github


---
## License

MIT

