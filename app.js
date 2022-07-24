const express = require('express');
const app = express();
const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json()); 

const cors = require("cors");
    app.use(cors({
        origin: "https://fukuno.jig.jp",
    }));

const PORT = process.env.PORT || 3000;
let CODE = [];

app.use(express.static("public"));

// http.createServer((req,res) => {
//     if(req.method === "GET"){
//         if(!req.body){
//             console.log("GETリクエスト");
//             res.end(html);
//         }
//         else if(!id && req.query.id == app.get("ID")){
//             res.send(app.get("CODE"));
//         }

//     } else if(req.method === "POST"){
//         console.log("CODE:" + req.body.CODE);
//         console.log("ID:" + req.query.ID);
//         app.set("CODE",req.body.CODE);
//         app.set("ID",req.query.ID);
//         res.send(req.query.CODE);
//     }

// }).listen(PORT);

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