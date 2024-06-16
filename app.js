const express = require('express'); //folosim modulul express
const app = express(); //am creat serverul
const fs=require("fs"); //folosim modulul fs

app.use(express.static('html'));
app.use(express.static('poze'));

app.get("/filtrare", function(req, res){
    var categorie=req.query.cat;
    var date=JSON.parse(fs.readFileSync("categorii.json"));
    for( var c of date)
        if(categorie==c.categorie)
            res.send(JSON.stringify(c.carti));
});

app.listen(5501, function() {console.log('serverul asculta pe portul 5501')}) 
