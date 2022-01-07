const input = require("fs").readFileSync("stdin", "utf8");

let qntdsegundos = parseInt(input);

const horas = parseInt(qntdsegundos / 3600);
qntdsegundos = qntdsegundos % 3600;

const minuto = parseInt(qntdsegundos / 60);
segundos = qntdsegundos % 60;

console.log(horas + ":" + minuto + ":" + segundos);