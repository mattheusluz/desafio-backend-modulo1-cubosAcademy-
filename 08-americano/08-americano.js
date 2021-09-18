const lista = [1, 3, 2, 1, 3];

function solucao(numeros) {
  let posicao = 0;
  const soma = numeros.reduce((acc, item) => acc += item);

  for (let i = 0; i < soma; i++) {
    if (posicao < numeros.length) {
      posicao++
    } else {
      posicao = 1;
    }
  }
  console.log(posicao);
}

solucao(lista);