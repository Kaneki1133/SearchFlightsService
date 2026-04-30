const { Flight } = require('../models/index');
const { Op } = require(`sequelize`);

class FlightRepository{

    #createFilter(data){                         //* Private Memeber Function just declare it using `#`
        let filter = {};

        if(data.arrivalAirportId){
            filter.arrivalAirportId =  data.arrivalAirportId;
        }
        
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        if(data.minPrice && data.maxPrice){
            filter = {
                ...filter,
                price:{
                    [Op.between]:[data.minPrice , data.maxPrice],
                }
            }
        }

        else if(data.minPrice){
            filter = {
                ...filter,
                price:{
                    [Op.lte]: data.minPrice,
                }
            }
        }


        else if(data.maxPrice){
            filter = {
                ...filter,
                price:{
                    [Op.lte]: data.maxPrice,
                }
            }
        }
        console.log(filter);

        return filter;
    }

    async create(data){
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something Went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something Went Wrong in The Repository LAyer");
            throw {error};
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            //console.log(filterObject)
            const flights = await Flight.findAll({
                where: filterObject, 
            });
            return flights;
        } catch (error) {
            console.log("Something Went Wrong in The Repository Layer");
            throw { error };
        }

    }

}

module.exports = FlightRepository;


/**
 *      where:{
 *          arrivalAirportId:2,
 *          departureAirportId:4,
 *          price: { [Op.gte]:4000 }        // Price greater than or equal to 
 * 
 *      }
 * 
 * 
 */