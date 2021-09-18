const lista = [1, 2, 3, 4];

function solucao(lista) {
  let soma = 0;
  lista.forEach(x => soma += x);

  console.log(soma);
}

solucao(lista);