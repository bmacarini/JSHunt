require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", 'Content-Type,Authorization');
    app.use(cors());
    next();
});

const uri = process.env.MONGO_URI;
mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3001);


