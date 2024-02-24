// método splice
// altera o array, seja adicionando ou removendo elementos dele. 
// array.splice(indice, número de elementos), sendo o índice o ponto de início para a remoção de elementos. 
// elementos que possuem índice menor que o índice fornecido não serão removidos

let array = [1, 2, 3, "hello world", 4.12, true];
console.log(array);

array.splice(2); // todos os elementos a partir do elemento 2 serão removidos
console.log(array);

// ou seja, se não definirmos o segundo parâmetro, todos os elementos começando pelo índice informado serão removidos do array
let array2 = [1, 2, 3, "hello world", 4.12, true];
// definindo o metodo splice com o segundo parâmetro quantificando quantos elementos eu quero que sejam excluidos
array2.splice(2, 1);
console.log(array2);

// exercicio aula
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 3);
arr;

// substituição utilizando o splice
let arrNomes = ['Maria', 'João', 'Lucas', 'Pedro'];
let novosNomes = arrNomes.splice(1, 2, 'Luiz', 'Ronaldo');
novosNomes;
arrNomes;

let pais = ['Brasil', 'Argentina', 'Colombia'];
pais.unshift('Uruguai');
pais;

// criar um array com 5 nomes 
let exercicioNomes = ['Guilherme', 'Manoel', 'Samuel', 'Davi', 'João'];
// acrescentar monica
exercicioNomes.unshift('Mônica');
exercicioNomes;
// retirar o último elemento do array
exercicioNomes.pop();
exercicioNomes;
// encontrar a posição do samuel
let samuelIndex = exercicioNomes.indexOf('Samuel');
samuelIndex;
// trocar o manoel por emanoel
let trocaEmanuel = exercicioNomes.splice(2, 1, 'Emanuel');
exercicioNomes;
