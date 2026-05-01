//* Here we will create a global export for respository modules
module.exports = {
    CityRepository: require(`./city-repository`),
    FlightRepository: require(`./flight-repository`),
    AirplaneRepository: require(`./airplane-repository`),
    CrudRepository: require(`./crud-repository`),
    AirportRepository: require(`./airport-repository`),
}

//* So now instead of exporting all the repository one by one 
//? Here we can pass one object with all the repositories as key-value pair 