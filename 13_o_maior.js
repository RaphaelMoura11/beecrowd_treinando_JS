var input = require("fs").readFileSync("stdin", "utf8");

var [A, B, C] = input.split(" ").map(item => parseFloat(item));

var maiorAB = (A + B + Math.abs(A - B))/2;

var maiorABC = (maiorAB + C + Math.abs(maiorAB - C))/2;

console.log(maiorABC + " é o maior");