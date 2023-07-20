require("dotenv").config();
const mongoose = require('mongoose')
const mongoURL = process.env.MONGO_URL

const connectTOMongo = async() =>{
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectTOMongo;