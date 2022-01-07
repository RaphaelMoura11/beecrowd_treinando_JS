const input = require("fs").readFileSync("stdin", "utf8");

const valores = input.split("\n");

var [x1, y1] = valores[0].split(" ");
var [x2, y2] = valores[1].split(" ");

var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(distancia.toFixed(4));