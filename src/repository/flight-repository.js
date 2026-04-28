const { Flight } = require('../models/index');

class FlightRepository{

    async create(data){
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something Went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;