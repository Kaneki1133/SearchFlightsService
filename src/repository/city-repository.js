const { City } = require('../models/index');

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
            const city = await City.update(data,{
                where:{
                    id:cityId,
                }
            });
            return city;
        } 
        catch(error){
            console.log("Something Went Wrong in the Repository Layer");
            throw {error};
        }
    }

}


module.exports = CityRepository;