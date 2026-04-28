# Welcome To Flights Service

## Project Setup

* clone the project on your local

* Execute

```bash
npm install
```

on the same path as of your root directory

* create a `.env` file in the root directory and add:

```env
PORT = 3000
```

* Inside the `src/config` folder create `config.json`:

```json
{ 
  "development": { 
    "username": <YOUR_DB_LOGIN_NAME>, 
    "password": <YOUR_DB_PSWD>, 
    "database": "Flights_Search_DB_DEV", 
    "host": "127.0.0.1", 
    "dialect": "mysql" 
  } 
}
```

* Once you've added your db config as listed above, go to the src folder from your terminal and execute:

```bash
npx sequelize db:create
```
* and then execute 

```bash
`npx sequelize db:migrate`
```

## DataBase Design
  * Airplane Table
  * Flight
  * Airport
  * City

  ### RelationShip
  * A flight belongs to an airplane but one airplane can be used in multiple flights
  * A city has many airports but one airport belongs to a city
  * One Airport can have many flights, but a flight belongs to one airport


## Tables

  ### City --> id, name, created_at, updated_at   
  ### Airport --> id, name, address, city_id, created_at, updated_at 
  * RelationShip --> City has many airports and Airports belongs to a City (one to many)

  ```bash
  npx sequelize-cli model:generate --name Airport --attributes name:String,address:String,cityId:integer
  ```

  Now When we need to populate our Database with some `Static data` we use Seeders 
  * We Create seeders file in Sequelize by 
  ```bash
  npx sequelize seed:generate --name add-airplanes
  ```
  running this will create a new seed file in which we can write our static data