    const { Airport } = require('../models/index');
    const { Op } = require('sequelize');

    class AirportRepository{

        async createAirport( {name , address , cityId} ){
            try {
                const airport = await Airport.create({
                    name:name,
                    address:address,
                    cityId: cityId,
                });
                return airport;
            } catch (error) {
                console.log("Something Went Wrong in the Repository layer")
                throw {error};
            }
        }

        async deleteAirport(airportId){
            try {
                await Airport.destroy({
                    where:{
                        id:airportId,
                    }
                });
                return true;
            } catch (error) {
                console.log("Something Went Wrong in The Repository Layer");
                throw {error};
            }
        }

        async getAirport(airportId){
            try {
                const airport = await Airport.findByPk(airportId);
                return airport;
            } catch (error) {
                console.log("Something went Wrong in the Repository Layer");
                throw {error};
            }
        }

        async updateAirport({airportId , name , address , cityId}){
            try {

                const airport = await Airport.findByPk(airportId);
                airport.name = name;
                
                if(address){
                    airport.address = address;
                }
                
                airport.cityId = cityId;
                
                await airport.save();
                return airport;
            
            } catch (error) {
                console.log("Something went Wrong in the repository layer");
                throw {error};
            }
        }

        async getAllAirport(filter){
            try {
                if(filter.name){
                    const airports = await Airport.findAll({
                        where:{
                            name:{
                                [Op.startsWith]: filter.name,
                            }
                        }
                    });
                    return airports;
                }

                const airports = await Airport.findAll();
                return airports;
            } catch (error) {
                console.log("Something Went Wrong in the respostiory Layer");
                throw {error};
            }
        }
    }

    module.exports = AirportRepository;