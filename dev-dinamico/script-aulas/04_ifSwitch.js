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