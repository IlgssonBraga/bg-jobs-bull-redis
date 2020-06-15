require('dotenv').config();
const express = require('express');
const BullBoard = require('bull-board');
const Queue = require('./lib/Queue');

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));


app.get('/', async (req, res) => {
    try {
        await Queue.add('sendMail');
    } catch (error) {
        console.log(error);
    }
    res.send('Hello');
});

app.use('/admin/bull', BullBoard.UI);

app.listen(3333, () => console.log('Server running on port 3333...'));