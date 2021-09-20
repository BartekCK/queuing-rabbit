const amqp = require('amqplib');
const express = require("express");

const app = express();

const PORT = process.env.PORT
const RABBIT_HOST = process.env.RABBIT_HOST
const QUEUE_NAME = process.env.QUEUE_NAME

async function main(){

    const connection = await amqp.connect(`amqp://${RABBIT_HOST}`)
    const channel = await connection.createChannel();

    channel.assertQueue(QUEUE_NAME, {
        durable: false
    });

    channel.consume(QUEUE_NAME, (msg) => {
        console.log(msg.content?.toString())
    }, {
        noAck: true
    });

    app.get("/", (req, res) => {
        res.send("Hello from consumer")
    })

    app.listen(PORT, () => {
        console.log(`App consumer started on port ${PORT}`)
    })
}

main()
