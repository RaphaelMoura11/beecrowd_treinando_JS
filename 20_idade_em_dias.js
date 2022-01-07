const input = require("fs").readFileSync("stdin", "utf8");

let qntdDias = parseInt(input);

const ano = parseInt(qntdDias /365);
qntdDias = qntdDias % 365;

const mes = parseInt(qntdDias / 30);
dia = qntdDias % 30;

console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dia + " dia(s)");