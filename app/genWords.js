const express = require("express");
const app = express();

function palRandom() {
    //Diccionario
    const array = ["Economia", "Mi", "General", "Que", "Grande", "Sos", "Peso", "155", "No", "Como", "Mayonesa", "Con", "Ajo"];

    //Randomizador

    var num = Math.floor(Math.random() * array.length);

    console.log(array[num]);

    return array[num];
};

module.exports = {
    palRandom
};

app.get("/", function(req, res) {
    res.send(palRandom());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("Me ejecuto equisde");
});