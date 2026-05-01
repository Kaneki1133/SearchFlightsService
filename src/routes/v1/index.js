const express = require(`express`); 
const CityController = require(`../../controllers/city-controller`);

//const AirportController = require(`../../controllers/airport-controller`);
const FlightController = require(`../../controllers/flight-controller`);

const AirportController = require(`../../controllers/airport-controller`);

const router = express.Router();


//* City Routes
router.post('/city' , CityController.create);
router.delete('/city/:id' , CityController.destroy);
router.get('/city/:id' , CityController.get);
router.get('/city' , CityController.getAll)
router.patch('/city/:id' , CityController.update);

// //* Airport Routes
// router.post('/airport', AirportController.create);
// router.delete('/airport/:id', AirportController.destroy);
// router.get('/airport/:id', AirportController.get);
// router.get('/airport', AirportController.getAll);
// router.patch('/airport/:id', AirportController.update);


//* Flight Routes

router.post('/flights' , FlightController.create);
router.get('/flights', FlightController.getAll);


//* new AirpotImplementation using CRUD Repo 
router.post('/airports', AirportController.create);
router.delete('/airports/:id', AirportController.destroy);
router.get('/airports/:id', AirportController.get);
router.get('/airports', AirportController.getAll);
router.patch('/airports/:id', AirportController.update);


module.exports = router;