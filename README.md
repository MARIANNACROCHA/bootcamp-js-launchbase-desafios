# bootcamp-js-launchbase-desafios
Desafios para fortalecer alguns conceitos no JS, entre eles:  Variáveis; Condicionais; Operadores.

Olá pessoal. Seguem dois exercícios que realizei durante o início do Bootcamp LaunchBase na Rocketseat. Esses dois exercícios tratam dos primeiros conceitos em JS para iniciantes.

Exercício 01 - Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:
      *SE o IMC maior ou igual a 30: Carlos você está acima do peso;
      *SE o IMC menor que 29.9: Carlos você não está acima do peso;

Exercício 02 - Crie um programa para calcular a aposentadoria de uma pessoa.
Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta.

Com base nas regras acima imprima na tela as mensagens:
      *SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
      *SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
      
      
Exercício 03 - Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:
Rua: Rua Guilherme Gembala
Número: 260
Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

Exercício 04 - Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:

const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};
Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
**********

Exercício 05 - Usuários e tecnologias
Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];
Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js
*********

Exercício 06 - Busca por tecnologia
Baseado no desafio anterior, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

Por exemplo:

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
}
Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
  }
}
*****

Exercício 07 - Soma de despesas e receitas
Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

Utilize o array de usuários abaixo:

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];
Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

function calculaSaldo(receitas, despesas) {}
Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
}
A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

Fulano possui saldo POSITIVO de 43.3
Sicrano possui saldo NEGATIVO de -90.3
