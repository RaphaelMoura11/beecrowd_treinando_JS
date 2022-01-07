var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var nomVendedor = parseInt(valores.shift());
var salarioFixo = parseFloat(valores.shift());
var totalVendasMensal = parseFloat(valores.shift());

var bonus = totalVendasMensal * (15/100);

var salarioTotal = salarioFixo + bonus;

console.log("TOTAL = R$ " + salarioTotal.toFixed(2));