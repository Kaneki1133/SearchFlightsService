const { AirportRepository } = require('../repository/index');

//* Creating Without Class this time

class AirportService{

    constructor(){
        this.airportRepo = new AirportRepository();
    }

    async createAirport(data) {
        try {
            const airport = await this.airportRepo.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something Went Wrong in the service layer");
            throw {error};
        }
    }

    async deleteAirport(airportId){
        try {
            const response = await this.airportRepo.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something Went Wrong in the Service Layer");
            throw {error};
        }
    }

    async updateAirport(data){
        try{
            const airport = await this.airportRepo.updateAirport(data);
            return airport;
        } catch (error){
            console.log("Something Went Wrong in the Service Layer");
            throw {error};
        }
    }

    async getAirport(airportId){
        try {
            const airport = await this.airportRepo.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async getAllAirport(filter){
        try {
            const airports = await this.airportRepo.getAllAirport( {name:filter.name} );
            return airports; 
        } catch (error) {
            console.log("Something went Wrong in the Service Layer");
            throw {error};
        }
    }
}

module.exports = AirportService;