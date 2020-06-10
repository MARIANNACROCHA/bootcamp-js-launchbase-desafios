// Crie um programa que armazena um array de usuários (objetos), 
// cada usuário tem um nome e suas tecnologias (novo array)

// Percorra a lista de usuários com uma estrutura de repetição imprimindo 
//em tela as informações dos usuários:


const usuarios = [
    {nome:"Jaqueline", tecnologias: ["HTML","CSS"] },
    {nome:"Vinícius", tecnologias: ["JavaScript", "CSS"] },
    {nome: "Marina", tecnologias: ["HTML", "Node.js"]},
    ];

function lista (){
for (let i=0; i < usuarios.length; i++) {
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);

    }
}

lista();

//----outra forma de fazer----


// const usuarios = [
//     {nome:"Jaqueline", tecnologias: ["HTML","CSS"] },
//     {nome:"Vinícius", tecnologias: ["JavaScript", "CSS"] },
//     {nome: "Marina", tecnologias: ["HTML", "Node.js"]},
//     ];

// for (let usuario of usuarios) {
//         console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`);

//     }


// console.log(usuarios);