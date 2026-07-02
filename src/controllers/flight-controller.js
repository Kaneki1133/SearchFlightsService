const { FlightService } = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: "Successfully created a flight",
            err: {},
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create a Flight",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: flights,
            success: true,
            message: "SuccessFully fetched the flights",
            err: {},

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to get all Flights",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'Successfully fetched a Flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to FetchFlight",
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully Updated the flight",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to Update Flight",
            err: error
        })
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
}