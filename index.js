const express = require('express');
const urlRoute = require('./api/urlRoute');
const { connectToDB } = require('./config/dbConfig');
require('dotenv').config();
const app = express();
connectToDB(process.env.MONGODB_URL).then(() => {
    console.log('DB Connected');
});
app.use(express.json());
app.use('/', urlRoute);

app.listen(process.env.PORT, () => {
    console.log('Server running');
})