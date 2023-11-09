const express = require('express');
const urlRoute = require('./api/generateShortRoute');
const findLongRoute = require('./api/findLongRoute');
const { connectToDB } = require('./config/dbConfig');
require('dotenv').config();
const app = express();
const PORT = 4000;
connectToDB(process.env.MONGODB_URL).then(() => {
    console.log('DB Connected');
});
app.use(express.json());
app.use('/api/url', urlRoute);
app.use('/', findLongRoute);

app.listen(PORT, () => {
    console.log('Server running');
})