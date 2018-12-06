const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// MONGOOSE SCHEMA //
const Schema = mongoose.Schema;

// create a schema for a koala
const koalaSchema = new Schema({
    name: { type: String, required: true},
    gender: { type: String},
    age: { type: Number},
    readyForTransfer: { type: Boolean},
    notes: { type: String},
});

const Koala = mongoose.model('Koala', koalaSchema);

// Get Test Data

router.get('/', (req,res) => {
    Koala.find({})
    .then((results) => {
        console.log(results)
        res.send(results);
    })
    .catch((error) => {
        console.log('error in GET', error);
        res.sendStatus(500);
    });
    
})

// POST new Koala

router.post('/', (req, res) => {
   const payload = req.body;
   Koala.create(payload)
      .then((results) =>{
         res.sendStatus(200)
      })
      .catch((error) => {
         console.log('Error posting to db: ', error)
      })
})

// Update koala ready to transfer status
router.put('/:id', (req, res) => {
   let koalaId = req.params.id;
   Koala.findOneAndUpdate({
      _id: koalaId
   },
   {
      $set: {
         "readyForTransfer": true
      }
   })
   .then((results) => {
      res.sendStatus(201)
   })
   .catch((error) => {
      res.sendStatus(501)
   })
})


module.exports = router;