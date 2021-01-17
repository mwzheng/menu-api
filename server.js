const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Starting server in ${process.env.NODE_ENV} mode, listening on port ${port}`)
})