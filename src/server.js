require('dotenv').config();
const express = require('express');
const Queue = require('./lib/Queue');

const app = express();

app.get('/', async (req, res) => {
    try {
        await Queue.add('sendMail');
    } catch (error) {
        console.log(error);
    }
    res.send('Hello');
});

app.listen(3333, () => console.log('Server running on port 3333...'));