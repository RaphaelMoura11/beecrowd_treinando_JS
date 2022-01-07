var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var numFuncionario = parseInt(valores.shift());
var hrTrabalhada = parseInt(valores.shift());
var salarioPorHora = parseFloat(valores.shift());

var salario = hrTrabalhada * salarioPorHora;

console.log("NUMBER = " + numFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));