const { CityRepository } = require("../repository/index")

class CityService{

    constructor(){
        this.cityRepo = new CityRepository();
    }
    
   // const cityRepo = new CityRepository(); could use this as well instead of classes

    async createCity(data){
        try{
            const city = await this.cityRepo.createCity(data);
            return city;
        }
        catch(error){
            console.log("Something Went Wrong at Service Layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            const response = await this.cityRepo.deleteCity(cityId);
            return response;
        }
        catch(error){
            console.log("Something Went Wrong at Service Layer");
            throw {error};
        }
    }

    async updateCity(cityId , data){
        try{
            const city = await this.cityRepo.updateCity(cityId , data);
            return city;
        }
        catch(error){
            console.log("Something Went Wrong at Service Layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await this.cityRepo.getCity(cityId);
            return city;
        }
        catch(error){
            console.log("Something Went Wrong at Service Layer");
            throw {error};
        }
    }
}

module.exports = CityService;