const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const streamRoutes = require('./routes/stream');
const uploadRoutes = require('./routes/upload');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/assets/images', express.static(path.join('./assets/images')));
// app.use('/assets/video', express.static(path.join('./assets/video')));
app.use('/assets/audio', express.static(path.join('./assets/audio')));
app.use('/assets/waveforms', express.static(path.join('./assets/waveforms')));

mongoose.connect('mongodb+srv://gabeame:' + process.env.MONGO_ATLAS_PW + '@cluster0-oh8uv.mongodb.net/node-api?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('Successfully connected to the database');
    })
    .catch(() => {
        console.log('Error connecting to the database, usually is because mongodb atlas sucks');
    });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
    next()
});

app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);
app.use('/api/stream', streamRoutes);
app.use('/api/upload', uploadRoutes);

module.exports = app;