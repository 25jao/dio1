import 'dotenv/config';
import express from 'express';

import userController from './app/controllers/UserController';

import bullboard from 'bull-board';

import Queue from './app/lib/queue';

const app = express();
//bullboard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.post('/users', userController.store);

app.listen(process.env.PORT, () =>{
    console.log('Server is Running on port:' + process.env.PORT);
});