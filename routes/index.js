const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to my trip planner!")
})

const travellerRoutes = require("./travellerRoutes");
router.use("/api/travellers",travellerRoutes)

const locationRoutes = require("./locationRoutes");
router.use("/api/locations",locationRoutes)

const tripRoutes = require("./tripRoutes");
router.use("/api/trips",tripRoutes)

module.exports = router;