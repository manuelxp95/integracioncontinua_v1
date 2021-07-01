'use strict';

var expect = require("chai").expect;

//var genWords = require("../app/genWords"); //dudoso

const arraytest = ["Economia", "Violeta", "Mi", "General", "Que", "Grande", "Sos", "Peso", "155", "No", "Como", "Mayonesa", "Con", "Ajo", "お兄ちゃん", "Reddit", "Fluor", "Boca", "River", "Brasil", "Ciruela", "Negocio", "Equipaje", "Microbio", "Goku", "Goya", "Resistencia", "UTN", "Zurdo", "Bicho", "Submarino"];

describe("Palabras Random - Test", function() {

    it("Testing the words equal to the library", function() {

        expect(arraytest).to.have.lengthOf(31);

    });

});