const validateCreateFlight = (req , res , next) =>{

    if(
        !req.body.flightNumber          ||
        !req.body.airplaneId            ||
        !req.body.departureAirportId    ||
        !req.body.arrivalAirportId      ||
        !req.body.arrivalTime           ||
        !req.body.departureTime         ||
        !req.body.price
    ) {
            //* if any of the body params is missing we come inside `if`

            return res.status(400).json({
                data:{},
                success: false,
                message: "Invalid request body to create flight",
                err: "Missing mandatory properties to create Flight"
            });
     }

     next();
}

module.exports = {
    validateCreateFlight
}



/**
 * !  Sole Purpose of Middlewares is to filter out any request that is not abiding the contract
 * ?  means `not abiding the contract` means than at least the mandotory properties are not present that filteration can be done in Middlewares
 * 
 * ! When the user send more data then required that type of logic is usally handeled in controllers
 * 
 */