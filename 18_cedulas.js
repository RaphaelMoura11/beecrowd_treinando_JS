const input = require("fs").readFileSync("stdin", "utf8");

let valor = parseInt(input);

const notas = [100, 50, 20, 10, 5, 1];

console.log(valor);

for(let nota of notas) {
    let qntdNotas = parseInt(valor / nota);
    console.log(`${qntdNotas} nota (s) de R$ ${nota},00`);
    valor = valor % nota;
}