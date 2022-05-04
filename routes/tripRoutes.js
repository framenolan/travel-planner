const express = require("express");
const router = express.Router();
const {Traveller,Trip,Location} = require("../models/");


//find all
router.get("/", (req, res) => {
  Trip.findAll()
    .then(dbTrips => {
      res.json(dbTrips);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//find one
router.get("/:id", (req, res) => {
  Trip.findByPk(req.params.id)
    .then(dbTrip => {
      res.json(dbTrip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create Trip
router.post("/", (req, res) => {
  Trip.create(req.body)
    .then(newTrip => {
      res.json(newTrip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// //update Trip
// router.put("/:id", (req, res) => {
//   Trip.update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   }).then(updatedTrip => {
//     res.json(updatedTrip);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({ msg: "an error occured", err });
//   });
// });

//delete a Trip
router.delete("/:id", (req, res) => {
  Trip.destroy({
    where: {
      id: req.params.id
    }
  }).then(delTrip => {
    res.json(delTrip);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;
