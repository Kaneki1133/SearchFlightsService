const { CityService }  = require(`../services/index`);

const cityService = new CityService();


//* PUT -> /city --> req.body
const create = async (req ,res) =>{
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully Create a city",
            err:{}
        })
    } catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to create city",
            err:error
        })
    }
}

//* DELETE. --> /city./:id
const destroy = async (req , res) =>{
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted a City",
            err:{}
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to delete a City",
            err:error
        })
    }
}

//* GET --> /city/:id
const get = async (req , res) =>{
    try{
        const response = await cityService.getCity(req.params.id)
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched a City",
            err:{}
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to fetch the city",
            err:error
        })
    }
}

//* PATCH --> /city/:id --> req.body
const update = async (req , res) =>{
    try{
        const response = await cityService.updateCity(req.params.id , req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully updated the data",
            err:{}
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to update a city",
            err:error
        })
    }
}

module.exports = {
    create,
    destroy,
    get, 
    update
}