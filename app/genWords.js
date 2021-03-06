//Declaraciones
const express = require("express");
const app = express();
let ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static("public"));

//Diccionario
const array = ["Economia", "Violeta", "Mi", "General", "Que", "Grande", "Sos", "Peso", "155", "No", "Como", "Mayonesa", "Con", "Ajo", "お兄ちゃん", "Reddit", "Fluor", "Boca", "River", "Brasil", "Ciruela", "Negocio", "Equipaje", "Microbio", "Goku", "Goya", "Resistencia", "UTN", "Zurdo", "Bicho", "Submarino"];

//funcion de aplicacion

function palRandom() {

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
    palRandom,
    array
};