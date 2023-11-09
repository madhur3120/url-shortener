const express = require('express');
const urlRoute = require('./routes/urlRoute');
const { connectToDB } = require('./config/dbConfig');
require('dotenv').config();
const app = express();
const PORT = 4000;
connectToDB(process.env.MONGODB_URL);
app.use('/url', urlRoute);

app.listen(PORT, () => {
    console.log('Server running');
})