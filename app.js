const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
    app.use(cors({
        origin: "https://fukuno.jig.jp",
    }));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.post('/', (req, res) => {
    console.log(req.body);
    console.log("postID:" + req.body.ID);
    console.log("postCODE:" + req.body.CODE);
    app.set("ID",req.body.ID);
    app.set("CODE",req.body.CODE);
    res.send(req.body.CODE);
    
});

app.get('/', (req, res) => {
    console.log("GET");
    if(req.query.id != undefined && req.query.id == app.get("ID")){
        console.log(app.get("CODE"));
        res.send(app.get("CODE"));
    }
    else res.render("index.ejs");
});


app.listen(PORT, () => {
    console.log("listening at " + PORT);
});