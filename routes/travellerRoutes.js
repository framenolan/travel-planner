const express = require("express");
const router = express.Router();
const {Traveller,Trip,Location} = require("../models/");


//find all
router.get("/", (req, res) => {
  Traveller.findAll()
    .then(dbTravellers => {
      res.json(dbTravellers);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//find one
router.get("/:id", (req, res) => {
  Traveller.findByPk(req.params.id,{
    include:[{
        model:Trip,
        include:[Location]
    }]
  })
    .then(dbTraveller => {
      res.json(dbTraveller);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create Traveller
router.post("/", (req, res) => {
  Traveller.create(req.body)
    .then(newTraveller => {
      res.json(newTraveller);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// //update Traveller
// router.put("/:id", (req, res) => {
//   Traveller.update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   }).then(updatedTraveller => {
//     res.json(updatedTraveller);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({ msg: "an error occured", err });
//   });
// });

//delete a Traveller
router.delete("/:id", (req, res) => {
  Traveller.destroy({
    where: {
      id: req.params.id
    }
  }).then(delTraveller => {
    res.json(delTraveller);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;
