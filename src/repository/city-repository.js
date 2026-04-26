const { City } = require('../models/index');

const { Op } = require(`sequelize`);

class CityRepository{

    async createCity( {name} ){
        try{
            const city = await City.create({
                name:name           //* Here key `name` is the attribute in City table and value `name` is the parameter
              });
            return city;
        } 
        catch(error){
            console.log("Something Went Wrong in the Repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{    
            await City.destroy({
                where:{
                    id : cityId,
                }
              });
            return true;
        } 
        catch(error){
            console.log("Something went wrong in the Respository layer")
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        } 
        catch(error){
            console.log("Something Went Wrong in the Repository Layer");
            throw {error};
        }
    }

    async updateCity(cityId , data){            //* Data will look like {name:`Prayagraj`}
        try{
            //* The Below Approach also works but will not return updated object
            // const city = await City.update(data,{
            //     where:{
            //         id:cityId,
            //     }
            // });
            //* for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } 
        catch(error){
            console.log("Something Went Wrong in the Repository Layer");
            throw {error};
        }
    }


    async getAllCities(filter){
        try {
                if(filter.name){
                    const cities = await City.findAll({
                        where:{
                            name: {
                                [Op.startsWith]: filter.name,
                            }
                        }
                    })
                    return cities;
                }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went Wrong in the Repository Layer");
            throw {error};
        }
    }
}


module.exports = CityRepository;