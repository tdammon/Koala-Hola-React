
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// Mongoose Connection

const databaseUrl = 'mongodb://localhost:27017/koala';
mongoose.connect(databaseUrl, {useNewUrlParser: true});

mongoose.connection.once('connected', () => {
    console.log('mongoose connected to: ', databaseUrl)
});

mongoose.connection.once('error', (error) => {
    console.log('mongoose connection error: ', error)
});

// Route includes
const koalaRouter = require('./routes/koala.router.js');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* Routes */
app.use('/koala', koalaRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});