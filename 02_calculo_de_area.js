var input = require("fs").readFileSync("stdin", "utf8");

var PI = 3.14159;
var valores = input.split("\n");

var r = parseFloat(input);
var area = PI * Math.pow(r, 2);

console.log("A=" + area.toFixed(4));