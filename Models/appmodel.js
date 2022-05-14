const mongoose = require("mongoose")

//creating schema for collection
const appSchema = new mongoose.Schema({
    point: Number,
    isFilled: Boolean
})

// connecting to a Health collection
const Health = mongoose.model('Health',appSchema)


module.exports = Health