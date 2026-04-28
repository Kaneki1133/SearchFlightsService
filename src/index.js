const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

//const db = require('./models/index')
const {City , Airport} = require('./models/index');
const sequelize = require(`sequelize`);
const airport = require('./models/airport');

const setupAndStartServer = async () =>{
    //* Create the express object
    const app = express();
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api', ApiRoutes);
    
    app.listen(PORT , async ()=>{
        console.log(`Server started at ${PORT}`);

        // const airports = await Airport.findAll({raw:true , include:City});       //* Prints all the airports from seeders with corresponding City data
        // console.log(airports);

        //* prints the all the airports of the city with cityId
        // const city = await City.findAll({
        //     raw:true,
        //     where: {
        //         id:13
        //     },
        //     include:Airport,

        // })
        // console.log(city);

        //db.sequelize.sync({alter:true})
        
        const city = await City.findOne({
            where:{
                id:13
            }
        });
        const airports = await city.getAirports({raw:true});
        

        console.log({
            city:city.name,
            airport:airports
        });

        console.log("Better Way");
        
        const airportName = airports.map(a => a.name);
        console.log({city:city.name , airport:airportName })


    });
}

setupAndStartServer();