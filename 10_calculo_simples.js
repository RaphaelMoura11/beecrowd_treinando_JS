var input = require("fs").readFileSync("stdin", "utf8");

var linha = input.split("\n");

var [idItem1, qtdItem1, valorUnitarioItem1] = linha.shift().split(" ");
var [idItem2, qtdItem2, valorUnitarioItem2] = linha.shift().split(" ");

var valorTotalItem1 = qtdItem1 * valorUnitarioItem1;
var valorTotalItem2 = qtdItem2 * valorUnitarioItem2;

var total = valorTotalItem1 + valorTotalItem2;

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));