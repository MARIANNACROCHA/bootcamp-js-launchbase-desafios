//Desafio1-1
//Cálculo de IMC de uma pessoa
//SE o IMC maior ou igual a 30: você está acima do peso;
//SE o IMC menor que 29.9: você não está acima do peso;

const nome = "Júlio";
const peso = 105;
const altura = 1.75;

const imc = peso / (altura*altura);

if (imc >= 30) {
    console.log('você está acima do peso.');
} else {
    console.log(`você não está acima do peso, ${nome}`);
}

console.log(imc);



