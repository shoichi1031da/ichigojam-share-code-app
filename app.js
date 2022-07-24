const express = require('express');
const app = express();
const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");
    app.use(cors({
        origin: "https://fukuno.jig.jp",
    }));

const PORT = process.env.PORT || 3000;
let code = [];

app.use(express.static("public"));


app.post('/', (req, res) => {
    console.log(req.body.command);
    app.set("code",req.body.command);
    code[0] = req.body.command;
    res.send(code[0]);
    
});

app.get('/', (req, res) => {
    console.log("appget:" + app.get("code"));
    if(req.query.id == 1)res.send(app.get("code"));
    else res.render("index.ejs");
});


app.listen(PORT, () => {
    console.log("listening at " + PORT);
});