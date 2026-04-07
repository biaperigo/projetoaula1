// Declarações e variaveis

//var, let e const

// var x = 10;
// console.log(x);
// var x = 20;
// console.log(x)
// var pode redeclarar e acessar fora do escopo
// let nao pode redeclarar e nao consegue acessar fora do escopo

// if (true){
//     var nome = "fiap";
// }
// console.log(nome)

//const - nao deixa alterar dado nenhum
// const taxaJuros = 0.85;
// taxaJuros = 0.50;
// console.log(taxaJuros)

//var exemplo1 = "Ola dev var";
//console.log(exemplo1);

//let exemplo2 = "ola dev let";
//console.log(exemplo2);

//const exemplo3 = "ola deve const";
//console.log(typeof exemplo3);

///let exemplo4 = 20;
//console.log(typeof exemplo4);

//let exemplo5 = true;
//console.log(typeof exemplo5);

//let exemplo6 = {npme:"fiap"};
//console.log(exemplo6);

//let exemplo7 = ["java", "python", "C#"];
//console.log(exemplo7);

//variavel indefinida
//let exemplo8;
//console.log(exemplo8);

//variavel vazia
//let exemplo9 = null;
//console.log(exemplo9)

// Operadores aritmeticos

//const valor1 = 20;
//const valor2 = 10;

//console.log(valor1 + valor2);
//console.log(valor1 / valor2);
//console.log(valor1 - valor2);
//console.log(valor1 * valor2);

//operadores logicos

//console.log(valor1 > valor2);
//console.log(valor1>10 && valor2 != 20);
// && - E (os dois verdadeiros)   || - OU (um deles verdadeiro)
//console.log(valor2 > 5 || valor1 <50);

//operadores de comparação
//console.log(valor1 < valor2);
//console.log(valor1 >= valor2);
//console.log(valor1 <= valor2);
//console.log(valor1 != valor2);
//console.log(valor1 == valor2);
//console.log(valor1 === valor2);
//console.log("O valor é:",valor1)

//exercicio1
//const P = 20;
//const v = 10;
//precoFinal =  P - v;
//console.log("O preço final com desconto é: ",precoFinal)

//exercicio2
//const token = 100;
//const usuariologado = 1
//const transacaoautorizada = usuariologado === 1 && token >=10;
//console.log("transação autorizada com sucesso")

//estrutura condicional

//if
// if(true){
//     console.log("é verdadeiro")
// }

// //if else
// let nome = "fiap";
// if (nome=="fiap"){
//     console.log("Nome verdadeiro")
// }else{
//     console.log("nome errado")
// }

// //if encadeado ou aninhado
// let idade = 60;

// if(idade<=13){
//     console.log("é uma criança")
// }else if(idade>13 && idade<=18){
//     console.log("é um adolescente")
// }else if(idade>18 && idade <= 59) {
//     console.log("é um adulto")
// }else{
//     console.log("é um idoso")
// }

// //switch case

// let times = "santos";

// switch(times){
//     case "santos":
//         console.log("um time idoso")
//         break;
//     case "são paulo":
//         console.log("Time panetone")
//         break;
//     case "palmeiras":
//         console.log("sem mundial")
//         break;
//     case "corinthians":
//         console.log("um time de tradição")
//         break;
//     default:
//         console.log("é tão ruim quanto a seleção brasileira")
// }

// //ternaria

// let salario = 100;
// let resultado = salario == 100 ? "salario certo":"salarioerrado"
// console.log(resultado)

// let usuario = "fiap";
// let userlogado =usuario ==="fiap"?"logado com sucesso":"usuario invalido"
// console.log(userlogado)

// function verificarparimpar(numero){
//     return numero % 2 === 0 ? "par":"impar"
// }
// console.log(verificarparimpar(9))

//ESTRUTURA DE REPETIÇÃO (LAÇO DE REPETIÇÃO)

//for - estrutura de repetição utilizada quando sabemos previamente quantas vezes o código vai ser executado

//declaração, operação, incremento

for(let i = 1; i<=5; i++){
    console.log("numero: ", i);
}

// for para array

const linguagens = ["java", "python", "C#", "PHP"]

for(let i=0; i < linguagens.length; i++){
    console.log("linguagem", i, ":", linguagens[i]);
}

const tecnologias =["JS", "HTML", "CSS"]
for(const tech of tecnologias){
    console.log("Estudando",tech)
}

const carros = {marca:"Volks", modelo: "fusca", ano:1980}
for (let dados in carros){
    console.log(dados, ":", carros[dados])
}