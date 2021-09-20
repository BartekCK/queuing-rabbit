const express = require("express");
const amqp = require('amqplib');

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const RABBIT_HOST = process.env.RABBIT_HOST
const QUEUE_NAME = process.env.QUEUE_NAME

async function main() {
    const connection = await amqp.connect(`amqp://${RABBIT_HOST}`)
    const channel = await connection.createChannel();

    channel.assertQueue(QUEUE_NAME, {
        durable: false
    });

    app.post("/", (req, res) => {
        const {message} = req.body;
        channel.sendToQueue(QUEUE_NAME, Buffer.from(message));
        res.status(201).send(message)
    })

    app.listen(PORT, () => {
        console.log(`App started on port ${PORT}`)
    })
}

main()