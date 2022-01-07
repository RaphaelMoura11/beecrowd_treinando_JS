var input = require("fs").readFileSync("stdin", "utf8");

var raio = parseFloat(input);
var pi = 3.14159;

var volEsfera = (4/3) * pi * Math.pow(raio, 3);

console.log("VOLUME = " + volEsfera.toFixed(3));