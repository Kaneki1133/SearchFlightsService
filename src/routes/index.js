const express = require(`express`);
const router = express.Router();

const v1ApisRoutes = require(`./v1/index`);


router.use('/v1' , v1ApisRoutes);       // so whenever you get `/v1` as prefix map it top v1ApisRoutes

module.exports = router;