const express = require("express");
const amqp = require('amqplib');

const app = express();


const PORT = process.env.PORT;
const RABBIT_HOST = process.env.RABBIT_HOST


app.get("/", (req, res) => {
    res.send("Hello me").status(200)
})

async function main() {
    const connection = await amqp.connect(`amqp://${RABBIT_HOST}`)

    const channel = await connection.createChannel();

    app.listen(PORT, () => {
        console.log(`App started on port ${PORT}`)
    })
}

main()