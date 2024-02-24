/* 
Escreva um código em que, após o cliente solicitar a escolha da bebida, a opção ‘switch’ deve avaliar a opção selecionada e atribuir o valor correspondente à variável ‘valor’. 
Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida, indicando que a escolha deve ser feita entre café, leite ou chá. Por fim, se uma opção válida for selecionada,
exibimos uma mensagem personalizada informando o nome da bebida escolhida e o valor a ser pago, formatado com duas casas decimais.*/

const valor = ["5.50", "2.70", "3.40"];
while (true) {
  bebida = parseInt(
    prompt("Escolha uma bebida: \n 1 - Café \n 2 - Leite \n 3 - Chá"));
  switch (bebida) {
    case 1:
      alert(
        `Você escolheu Café. Pague R$ ${parseFloat(valor[0]).toFixed(2)} no caixa`);
      break;
    case 2:
      alert(
        `Você escolheu Leite. Pague R$ ${parseFloat(valor[1]).toFixed(2)} no caixa`);
      break;
    case 3:
      alert(
        `Você escolheu Chá. Pague R$ ${parseFloat(valor[2]).toFixed(2)} no caixa`);
      break;
    default:
      alert("Insira novamente uma opção válida");
      continue;
  }
  break;
}
