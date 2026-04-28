const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req , res) =>{
    try {
        const airport = await airportService.createAirport(req.body);
        return  res.status(201).json({
            data:airport,
            success:true,
            message:"SuccessFully Created an Airport",
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to create Airport",
            err: error
        });
    }
}

const destroy = async (req , res) =>{
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return  res.status(200).json({
            data:response,
            success:true,
            message:"SuccessFully Deleted Airport",
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to delete Airport",
            err: error
        });
    }
}

const get = async (req , res) =>{
    try {
        const airport = await airportService.getAirport(req.params.id);
        return  res.status(200).json({
            data:airport,
            success:true,
            message:"SuccessFully fetched an Airport",
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to fetch Airport",
            err: error
        });
    }
}

const update = async (req , res) =>{
    try {
        const airport = await airportService.updateAirport({
            airportId:req.params.id,
            name: req.body.name,
            address: req.body.address,
            cityId: req.body.cityId,
        });
        return res.status(200).json({
            data:airport,
            success:true,
            message:"SuccessFully Updated Airport",
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to Update Airport",
            err: error
        });
    }
}


const getAll = async (req , res) =>{
    try {
        const airports = await airportService.getAllAirport(req.query);
        return  res.status(200).json({
            data:airports,
            success:true,
            message:"SuccessFully fetched all Airports",
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to fetched Airports",
            err: error
        });
    }
}


module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
};