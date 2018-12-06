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

module.exports = router;