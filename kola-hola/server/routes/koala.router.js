const express = require('express');
const router = express.Router;
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

module.exports = router;