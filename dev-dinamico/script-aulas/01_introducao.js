// let armazena o valor da variável em um bloco (por ex se tiver em um bloco de função, a variavel só vai existir lá)
console.log('testando');

let a = 10;
let b = 20;
let total = a + b;

console.log(total);

// var armazena o valor da variavel globalmente
// É case sensitive
// o uso do var está sendo descontinuado por que ela pode ficar vazia e dar erros no código pois o valor aparece como undefined. 
var teste;
var nomePessoa = "Beatriz";
var NOMEPESSOA = "Luana"

console.log(teste);
console.log(nomePessoa);
console.log(NOMEPESSOA);

// podemos criar múltiplas variáveis sem ficar repetindo o var/let
let comida1 = 'macarrão',
    comida2 = 'feijao',
    comida3 = 'arroz';

console.log(comida1);
console.log(comida2);
console.log(comida3);

// const é para valores constantes/que não mudam
const valor1 = 2
console.log(valor1)