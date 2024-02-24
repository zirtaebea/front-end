// * slice
// o SLICE NÃO ALTERA O ARRAY ORIGINAL, ELE CRIA UM NOVO ARRAY
// O SPLICE ALTERA O ARRAY ORIGINAL
// array.slice(de, para);

let exSlice = [1, 2, 3, 4, 5];
let novoSlice = exSlice.slice(0, 3); // recorta o array A PARTIR INDICE DO PRIMEIRO PARÂMETRO ATÉ O INDICE DO SEGUNDO PARÂMETRO
novoSlice;

// exemplo da aula
// slice
let pessoas = ['Eduardo', 'Joana', 'Wallace', 'Rosana'];
let pessoasCortado = pessoas.slice(1, 3);
pessoas;
pessoasCortado;

// array com todos os meses do ano
let anoTodo = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let trimestre1 = anoTodo.slice(0, 3);
trimestre1;

// dividir em trimestre 
let trimestre2 = anoTodo.slice(3, 6);
trimestre2;

let trimestre3 = anoTodo.slice(6, 9);
trimestre3;

let trimestre4 = anoTodo.slice(9, 12);
trimestre4;



// * concat
// concat concatena dois arrays 
// pode ser usado tanto para strings quanto para arrays
// com string
let nome = 'Fabiana ';
let sobrenome = 'Silva'
let nomeCompleto = nome.concat(sobrenome);
nomeCompleto;

// com array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
arr3;

// slice com concat
let gerentes = ['Davi', 'Manuela'];
let empresa = pessoas.concat(gerentes);
empresa;



// * filter
// recebe cada elemento do array e aplica uma instrução condicional a ele. Se essa condição for verdadeira, o elemento é colocado no array de resultado.
// se for falsa, o elemento não é colocado lá
// let novoarr = arr.filter(function callback(elemento, indice, array){ retorna true ou false}[argumentoUsado])
// exemplo 1
const numeros = [1, 2, 3, 4];
const pares = numeros.filter(x => x % 2 === 0);
pares;

// exemplo 2
let meusNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function buscaPares(valor) {
    if (valor % 2 == 0) // if true, retorne os pares
        return valor;
}

let numerosPares = meusNumeros.filter(buscaPares);
numerosPares;

// exercicios da aula
let numerosMaior5 = meusNumeros.filter(x => x > 5);
numerosMaior5;

// ou 
let numeros5filtrado = meusNumeros.filter(
    function (valor) {
        return valor > 5;
    }
)
numeros5filtrado;

// ou
function buscarValores(valor) {
    return valor < 5;
}

let menoresQueCinco = meusNumeros.filter(buscarValores);
menoresQueCinco;

// ou 
let maiorQueSete = meusNumeros.filter((valor) => {
    return valor > 7; // função anônima
});
maiorQueSete;

// com objeto
let funcionarios = [
    { nome: 'Luiz', idade: '62' },
    { nome: 'Arthur', idade: '22' },
    { nome: 'Lucas', idade: '18' },
    { nome: 'Fernanda', idade: '42' },
    { nome: 'Davi', idade: '25' }
];

let pessoasListagem = funcionarios.filter(
    function (pessoa) {
        return pessoa.nome.length < 5;
    });
pessoasListagem;


// objetos de produtos
let produtos = [
    { id: 1, descricao: 'Celular', categoria: 'Eletrônico' },
    { id: 2, descricao: 'Máquina de Lavar', categoria: 'Eletrodoméstico' },
    { id: 3, descricao: 'Geladeira', categoria: 'Eletrodoméstico' },
    { id: 4, descricao: 'Tablet', categoria: 'Eletrônico' },
    { id: 5, descricao: 'Pratos', categoria: 'Utensilhos' },
    { id: 6, descricao: 'Talheres', categoria: 'Utensilhos' },
    { id: 7, descricao: 'Camera', categoria: 'Eletrônico' },
    { id: 8, descricao: 'Fogão', categoria: 'Eletrodoméstico' },
    { id: 9, descricao: 'Copos', categoria: 'Utensilhos' }
];

// id, descricao, categoria
// criar array somente eletronicos
let apenasEletronicos = produtos.filter(tipo => tipo.categoria == 'Eletrônico');
apenasEletronicos;



// * map
// permite iterar sobre o array e modificar seus elementos usando uma função de callback 
// arr.map(function(elemento, indice, array){}, this);
// function é a função de callback chamada para cada elemento do array
// o método map sempre passa o elemento atual, o índice do elemento atual e todo o objeto do array para ela.
// o argumento this será utilizado dentro da função de callback. por padrão esse valor é undefined.

let arrMap = [2, 3, 5, 7];
let arrModificado = arrMap.map(multiplicado => multiplicado * 3); // iterando em cada elemento
arrModificado;

//exemplo da aula
let numMap = meusNumeros.map(function (valor) {
    return valor * 2.
});

numMap;

// exemplo 2
funcionarios;

let funcMaior25 = [];
let funcMap = funcionarios.map(function (pessoa) {
    if (pessoa.idade > 25) {
        return pessoa.nome;
    }
});
funcMap;
let Nomes25 = funcMap.filter(nome => nome != undefined);
Nomes25

// exemplo 3
let nomeGrande = funcionarios.map(pessoa => pessoa.nome)
console.log(nomeGrande);



// * reduce
// reduz um array de valores a um unico valor
// para obter o valor de resultado ele executa uma função de redução em cada elemento do array
// usar quando se tem um array de valores e você deseja somar todos eles
let total = meusNumeros.reduce(function (total, numero) {
    return total + numero;
}, 0); // zero é o valor inicial 
total;


let total2 = numMap.reduce(function (total2, numero) {
    return total2 + numero;
});
total2;



// * for each
// é usado para percorrer arrays mas usa uma função de modo diferente do laço for tradicional
// passa por uma função de callback para cada elemento do array juntamente com os seguintes parâmetros
// arr.forEach(function(valor atual (obrigatorio), indice do elemento atual, array no qual o elemento pertence){});
// exemplo 1
meusNumeros.forEach(numero => { if (numero > 3) { console.log(`Esse elemento possui o valor ${numero}`) } });

// exemplo 2
let comidas = ['Arroz', 'Feijão', 'Macarrão', 'Salada', 'Peixe', 'Morango'];
comidas.forEach(alimento => console.log(`O alimento da vez é ${alimento}`));

// exemplo 3 
let tot = 0;
meusNumeros.forEach(valor => {
    tot += valor;
})
tot;