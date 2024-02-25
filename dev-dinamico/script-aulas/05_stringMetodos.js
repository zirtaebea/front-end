/* Trabalhando com strings */
let nome = 'Beatriz ';
let sobrenome = 'Gomes';
let nomeCompleto = nome + sobrenome;
nomeCompleto;
// ou
nome += sobrenome;
nome;

// exemplos da aula
// length
// tamanho de uma string
let tamanho = nomeCompleto.length;
tamanho;

// usando operador ternario
resultado = tamanho > 12 ? 'Obrigado' : 'Você preencheu errado, preencha o seu nome completo';
resultado;

// upper e lower case
let upperNome = nome.toLocaleUpperCase();
upperNome;

let lowerNome = nome.toLocaleLowerCase();
lowerNome;

//indexOf (POSIÇÃO)
let frase = 'WJSN fracassadas d+';
let posicao = frase.indexOf('fracassadas');
posicao;

// slice (cortar frase)
let cortado = frase.slice(0, 16);
cortado;

let cortado2 = frase.slice(5,);
cortado2;

// verificar se uma palavra existe
let procurar = frase.includes('fracassadas');
procurar;

// concat
let frase2 = 'Baddie é ';
let frase3 = 'a pior musica que existe';
let completao = frase2.concat(frase3);
completao;

// tirar espaços nos extremos
let trimFrase = '  ta calor d+  ';
let meuTrim = trimFrase.trim();
meuTrim;

// transformar string em array
let numeros = '1,2,3,4,5,6,7,8,9,10';
let arrNumeros = numeros.split(",");
arrNumeros;

// exercícios
let myString = 'IVE escória da sociedade';
let stringSize = myString.length;
stringSize;
let fraseIndexOf = myString.indexOf('escória');
fraseIndexOf;

// substring
let novaString = myString.substring(0, 11);
novaString;

// verificar se a frase tem essa palavra e substituir o que vem depois dela
let mudanca = '';

if (myString.startsWith('IVE')) {
    mudanca = myString.replace('IVE', 'G-IDLE');
    mudanca = mudanca.toLocaleUpperCase();
}

mudanca;

// EXERCÍCIO 2
let url = 'http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme';

const parametros = url.split('?')[1];
parametros;

const valores = parametros.split('&');
valores;

for (let i = 0; i < valores.length; i++) {
    if (valores[i].startsWith('atores=')) {
        valores[i] = 'atores=' + valores[i].substring(7).toUpperCase();
    }
}

valores;