const { FlightRepository, AirplaneRepository } = require('../repository/index');

const { compareTime } = require('../utils/helper');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.FlightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {

            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: 'Arrival Time cannot be less than departure time' };
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.FlightRepository.create({ ...data, totalSeats: airplane.capacity })
            return flight;

        } catch (error) {
            console.log("Something Went Wrong in the Service Layer");
            throw { error };
        }
    }

    async getAllFlightData(data) {
        try {
            const flights = await this.FlightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something Went Wrong in the Service Layer");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.FlightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something Went Wrong in the Service Layer");
            throw { error };
        }
    }

    async updateFlight(flightId, data) {
        try {
            const response = await this.FlightRepository.updateFlight(flightId, data);
            return response;
        } catch (error) {
            console.log("Something Went Wrong in the Service Layer");
            throw { error };
        }
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
 */