const { mongo } = require("mongoose")

const mongoose = require('mongoose');

// Connect to MongoDb Atlas
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to MongoDb Atlas: ${connect.connection.host}`);
    } catch (err) {
        console.log(`MongoDb Atlas connection error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDb;