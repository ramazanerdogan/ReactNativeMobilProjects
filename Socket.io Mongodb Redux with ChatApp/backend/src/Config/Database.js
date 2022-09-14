const mongoose = require('mongoose');
require('dotenv').config();

require("colors")


mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true
    })
    .then(result => {
        console.log('MongoDB Connect'.green);
    })
    .catch(error => {
        console.log(error);
    });