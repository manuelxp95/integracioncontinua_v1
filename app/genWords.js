//Declaraciones
const express = require("express");
const app = express();
let ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static("public"));

//funcion de aplicacion

function palRandom() {
    //Diccionario
    const array = ["Economia", "Mi", "General", "Que", "Grande", "Sos", "Peso", "155", "No", "Como", "Mayonesa", "Con", "Ajo"];

    //Randomizador

    var num = Math.floor(Math.random() * array.length);

    console.log(array[num]);

    return array[num];
};

// ejecucion en servidor + integracion html

app.get("/", function(req, res) {
    res.render(__dirname + '/index.ejs', {
        PALABRA: ""
    });
});

app.post("/", function(req, res) {
    let palabra = palRandom();

    res.render(__dirname + '/index.ejs', {
        PALABRA: palabra
    });

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("Me ejecuto equisde");
});

module.exports = {
    palRandom
};