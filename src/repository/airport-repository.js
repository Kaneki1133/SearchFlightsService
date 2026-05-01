const CrudRepository  = require('./crud-repository');
const { Airport } = require('../models/index');
const { Op } = require('sequelize');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }
 
    async getAllAirport(filter){
    try {
        if( filter && filter.name){
            const airports = await this.model.findAll({
                where:{
                    name:{
                        [Op.startsWith]: filter.name,
                    }
                }
            });
            return airports;
        }
        const airports = await this.model.findAll();
        return airports;

        } catch (error) {
            console.log("Something Went Wrong in getAllAirports in respostiory Layer");
            throw {error};
        }
    }
}

module.exports = AirportRepository;