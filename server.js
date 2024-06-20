require("dotenv").config();
const express = require("express");
const db = require("./src/database/db.js");

let port = process.env.PORT;
const app = express();
app.use(express.json())


app.get('/users', (req, res) => {
    db.getAllSessions().then((data) => {
        res.send(data)
    })

})

app.post('/users', async (req, res) => {
    db.insertSession(req.body).then((data) => {
        res.sendStatus(201);
    })

})


app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})
