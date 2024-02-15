// com o construtor, o número de elementos do array é definido, mesmo não possuindo elementos
let arrConstrutor = new Array(3);
console.log(arrConstrutor.length);

// o array com colchetes cria um array no qual você precisa inserir elementos para determinar o seu comprimento
let arrNormal = [42];
console.log(arrNormal.length);

// para criar array vazio com colchetes
let arrVazio = [];
console.log(arrVazio.length);

// populando um array
arrVazio[0] = "Meu";
arrVazio[1] = "nome";
arrVazio[2] = "é";
arrVazio[3] = "Beatriz";
console.log(arrVazio);

// populando um array de parênteses
arrConstrutor = ["Me", "Chamo", "Beatriz"];
console.log(arrConstrutor);

// exercícios da aula
let valores = [8, 1, 7, 2, 9];
console.log(valores[0]);
console.log(valores[3]);

// com loop (iteração)
for (let x = 0; x < valores.length; x++) {
  console.log(`Na posição ${x} do array está o número ${valores[x]}`);
}

// colcular a média de todos os números de um array
let somaArray = 0;

for (let i = 0; i < valores.length; i++) {
  somaArray += valores[i];
}

let mediaArray = somaArray / valores.length;
console.log(mediaArray);

// localizar o maior valor dentro de um array de números
let maiorValor = valores[0]; // criando uma variável maiorValor para definir um parâmetro para começar a iterar buscando o maior valor

for (let i = 1; i < valores.length; i++) {
  if (valores[i] > maiorValor) {
    // se o valor do elemento for maior que o valor do primeiro elemento, o maior valor será o valor do elemento iterado
    maiorValor = valores[i];
  }
}
console.log(maiorValor);

// array com um conjunto de cidades e localizar a cidade com o maior número de letras
let cidades = ["Salvador", "Rio de Janeiro", "Curitiba", "Manaus", "Fortaleza"];

let elemento = cidades[0];
let maiorCidadeLenght = cidades[0].length;

for (let i = 1; i < cidades.length; i++) {
    if (cidades[i].length > maiorCidadeLenght) {
        maiorCidadeLenght = cidades[i].length;
        elemento = cidades[i];
    }
}
console.log(
    `O elemento ${elemento} é o que possui maior número de caracteres, com ${maiorCidadeLenght} caracteres`
);

// métodos de arrays
// reverse
// inverte a ordem dos itens de um array
console.log(valores.reverse());

// let outrosValores = [4, 3, 5];

// join
// join transforma um array em string, trocando as virgulas pelo caractere desejado
console.log(valores.join("/"));

// shift
// retirar o primeiro elemento de um array e retorna o número retirado
console.log(valores.shift());
console.log(valores);

// indexOf
// indice do elemento indicado no método
console.log(valores.indexOf(1));

// push
// adiciona um elemento no final do array
valores.push(6);
console.log(valores);

// pop
// retirar o último elemento do array
valores.pop();
console.log(valores);

// array de números positivos e negativos e criar um novo array apenas com números positivos
let arrayExercicio = [-7, 5, 9, -2, 0, 12, 15, -30];
arrayExercicio.sort((a, b) => a - b);
console.log(arrayExercicio);

let arrayPositivo = [];

for (i=0; i < arrayExercicio.length; i++){
    if(arrayExercicio[i] > 0){
        arrayPositivo.push(arrayExercicio[i]);
    }
}

console.log(arrayPositivo);