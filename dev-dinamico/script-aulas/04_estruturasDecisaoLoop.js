// * if
// estrutura condicional que executa a afirmação dentro do bloco se essa for determinada verdadeira
// se for falsa, executa as afirmações dentro do else
// exemplo 1
let pais = 'Brasil';

if (pais != 'Brasil') {
    console.log('Você é estrangeiro');
} else {
    console.log('Você é brasileiro');
}

// exemplo 2
let idade = 22;
if (idade < 16 && pais == 'Brasil') {
    console.log('Você não tem 22 anos mas é Brasileiro');
} else if (idade == 22 && pais == 'Argentina') {
    console.log('Você tem 22 anos mas não é Brasileiro');
} else if (idade == 22 && pais == 'Brasil') {
    console.log('Você tem 22 anos e é Brasileiro');
}



// * switch
// avalia uma expressão combinando o valor da expressão para uma cláusula case e executa as instruções associadas ao case.
let diaSemana = 4;

switch (diaSemana) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    default:
        console.log('Dia da semana não existe');
        break;
}



// * for
// melhor forma para iterar uma série de dados ao mesmo tempo.
// for - utilizado para percorrer o código n vezes até que a condição seja falsa
// for/in - usado para percorrer as propriedades de um objeto
// for/of - é utilizado para percorrer uma matriz de objetos iteraveis
// for (condição de inicialização; condição teste; incremento ou decremento){};

let cardapio = [
    { id: 1, nome: 'Macarrão', refeicao: 'Almoco' },
    { id: 2, nome: 'Sopa', refeicao: 'Janta' },
    { id: 3, nome: 'Pão', refeicao: 'Café' },
    { id: 4, nome: 'Ovo mexido', refeicao: 'Café' },
    { id: 5, nome: 'Lasanha', refeicao: 'Almoco' },
    { id: 6, nome: 'Cuscuz', refeicao: 'Janta' }
];

// exemplo 1
for (let tipoComida in cardapio) {
    console.log(cardapio[tipoComida].nome);
}
// exemplo 2
for (let comida of cardapio) {
    console.log(comida.refeicao);
}




// * while e do while
// é um laço que é executado enquanto uma condição especificada é verdadeira
// while (condicao){};
// já o do while executa uma declaração até que o teste da condição for falsa. a condição é avaliada DEPOIS que o bloco de código é executado, resultando que a declaração seja
// executada pelo menos 1x
// do{}while(condição);

// exemplo 1
let numWhile = 1;
let total = 0;
while (numWhile <= 10) {
    total += numWhile;
    console.log(total);
    numWhile++;
}

// exemplo 2
let numDo = 2;
do {
    console.log(numDo);
    numDo++
} while (numDo < 10);

/* Nesse caso, temos um array chamado “carros” que contém dois objetos representando carros diferentes. 
Utilizamos o “forin” para percorrer cada objeto do array e exibimos suas características no console. 
Observe como o “forin” nos permite acessar cada atributo dos objetos individualmente. 
Percebemos como essa estrutura de controle nos permite percorrer e manipular objetos e arrays com facilidade.*/

const carros = [

    { modelo: 'Audi A3', marca: 'Audi', ano: 2020 },

    { modelo: 'Jeep Compact', marca: 'Jeep', ano: 2021 }

];

for (let indice in carros) {

    console.log('Carro ' + (parseInt(indice) + 1) + ':');

    for (let atributo in carros[indice]) {

        console.log(atributo + ': ' + carros[indice][atributo]);

    }

    console.log('-----');

}

const numeros = [2, 4, 6, 8, 10];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 === 0) {

        soma += numeros[i];

    }

}

console.log(soma);