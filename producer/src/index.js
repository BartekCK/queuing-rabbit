const express = require("express");

const app = express();


const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello me").status(200)
})

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`)
})