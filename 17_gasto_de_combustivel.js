const input = require("fs").readFileSync("stdin", "utf8");
const valores = input.split("\n");

var tempViagem = parseInt(valores.shift(" "));
var velMedia = parseInt(valores.shift(" "));

var combustivelGasto = (tempViagem * velMedia) / 12

console.log(combustivelGasto.toFixed(3));