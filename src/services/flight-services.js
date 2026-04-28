const { FlightRepository , AirplaneRepository } = require('../repository/index');

const { compareTime } = require('../utils/helper');

class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.FlightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            
            if(!compareTime(data.arrivalTime , data.departureTime) ){
                throw{error:'Arrival Time cannot be less than departure time'};    
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.FlightRepository.create( {...data , totalSeats: airplane.capacity} )
            return flight;

        } catch (error) {
            console.log("Something Went Wrong in the Service Layer");
            throw {error};
        }
    }

    async getFlightData(){
        //Todo
    }
}

module.exports = FlightService;

/**
 * * The data we are gonna get from controller in createFlight is 
 * 
 * {
 *      flightNumber,
 *      airplaneId,
 *      departureAirportId,
 *      arrivalAirportId,
 *      arrivalTime,
 *      departureTime,
 *      price,
 *!      totalSeats --> will get from airplane table
 * }
 * 
 * 
 */