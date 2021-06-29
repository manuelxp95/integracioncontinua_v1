'use strict';

var expect = require("chai").expect;

var genWords = require("../app/genWords"); //dudoso

const arraytest = ["Economia", "Mi", "General", "Que", "Grande", "Sos", "Peso", "155", "No", "Como", "Mayonesa", "Con", "Ajo"];

describe("Palabras Random - Test", function() {

    it("Testing the words equal to the library", function() {

        expect(arraytest).to.include(genWords.palRandom());

    });

});


//var assert = require('assert');
//describe('Array', function() {
//    describe('#indexOf()', function() {
//        it('should return -1 when the value is not present', function() {
//            assert.equal([1, 2, 3].indexOf(4), -1);
//        });
//    });
//});