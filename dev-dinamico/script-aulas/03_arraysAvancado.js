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
array2.splice(2,1);
console.log(array2);