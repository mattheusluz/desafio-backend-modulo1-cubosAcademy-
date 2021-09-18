
function solucao(carta) {
  const cartas = ['Q', 'J', 'K', 'A', '2', '3', 'Q'];
  const posicaoCarta = cartas.indexOf(carta);
  let manilha = cartas[posicaoCarta + 1];
  console.log(manilha);
}

solucao('Q');