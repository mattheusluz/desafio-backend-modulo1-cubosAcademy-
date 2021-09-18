const lista = [2, 3, 4];

function solucao(lista) {
  let soma = 0;
  lista.forEach(x => soma += x);

  const media = soma / lista.length;
  console.log(media);
}

solucao(lista);