    # Welcome To Flights Service 

    ## Project Setup
    -   clone the project on your local 
    - Execute `npm install` on the same path as of your root directory of the 
    downloaded project
    - create a `.env` file in the root directory and add the following enviornment variable 
        - `PORT = 3000`
    - Inside the `src/config` folder create a new file `config.json` and then add the following piece of code

    ```

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

    - Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` 