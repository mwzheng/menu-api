const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');

dotenv.config({ path: './config/config.env' });

// Connect to MongoDb Atlas
connectDb();

const foodRouter = require('./routes/food');

const app = express();

app.use(express.json());

app.use('/api/v1/foods', foodRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Starting server in ${process.env.NODE_ENV} mode, listening on port ${port}`)
})