const express = require('express');
const app = express();
const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");
    app.use(cors({
        origin: "https://fukuno.jig.jp",
    }));

const PORT = process.env.PORT || 3000;
let command = [];

app.use(express.static("public"));


app.post('/', (req, res) => {
    console.log(req.body.command);
    command[0] = req.body.command;
    const remoteAddress = req.connection.remoteAddress;

        res.send(command[0]);
    
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.listen(PORT, () => {
    console.log("listening at " + PORT);
});