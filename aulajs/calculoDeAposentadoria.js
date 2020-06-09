//Crie um programa para calcular a aposentadoria de uma pessoa.

const nome = "José";
const sexo = "M";
const idade = 75;
const contribuicao = 20;

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos,
// enquanto a mulher precisa ter no mínimo 85 anos na soma;
//Com base nas regras acima imprima na tela as mensagens:

//SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
//SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

const tempoDeContribuicao = idade + contribuicao;

if ((tempoDeContribuicao >= 85 && sexo=="F") || (tempoDeContribuicao >=95 && sexo=="M")) {
    console.log (`${nome} , você pode se aposentar!`);
} else {
    console.log (`${nome} , você ainda não pode se aposentar!`);
}



console.log(tempoDeContribuicao);