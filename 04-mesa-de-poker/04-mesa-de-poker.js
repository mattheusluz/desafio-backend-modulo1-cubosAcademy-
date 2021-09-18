const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solucao(min, max, valores) {
  const autorizados = valores.filter(x => x >= min && x <= max);
  console.log(autorizados);
}

solucao(1, 7, lista);