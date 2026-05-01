const CrudService = require('./crud-services');
const { AirportRepository } = require('../repository/index');

class AirportService extends CrudService{
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }

    async getAllAirport(filter){
        try {
            const response = await this.repository.getAllAirport(filter);
            return response;
        } catch (error) {
            console.log("Something went wrong in getAllAirports from airportServices");
            throw {error};
        }
    }
}

module.exports = AirportService;