const mongoose = require('mongoose')
require('dotenv').config();
const UserSchema = new mongoose.Schema({
    name: String,
    phone: String
}, { collection: 'users' })


const Repository = mongoose.model('User', UserSchema)

module.exports = Repository