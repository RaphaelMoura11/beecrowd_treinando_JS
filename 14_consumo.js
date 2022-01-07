var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var distancia = parseInt(valores.shift());
var combustivel = parseFloat(valores.shift());

var consumoMedio = distancia / combustivel;

console.log(consumoMedio.toFixed(3) + " km/l");