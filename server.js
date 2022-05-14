const app = require('./app')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

// MongoDB connection function
const connect = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log('connected to db')
    } catch (err) {
        throw err;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected")
})

//defining port on which app is running
port = process.env.PORT || 8001

app.listen(port, () => {
    //calling mongodb connection function to connect with database
    connect()
    console.log(`App running on http://localhost:${port}/api/v1/healthvalues`);
});