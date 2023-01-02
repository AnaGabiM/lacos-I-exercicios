let comerCoxinha = prompt("Deseja comer mais coxinhas?").toUpperCase();
const sim = "S";
const nao = "N";
let conta = 0;

while (comerCoxinha === sim) {
    conta = conta + 2.50;
    console.log(conta)
    comerCoxinha = prompt("Deseja comer mais coxinhas?").toUpperCase();
}
console.log(`Valor total = ${conta}`)