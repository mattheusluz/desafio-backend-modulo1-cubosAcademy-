const jogadores = [
  {
    nome: "Herman",
    jogada: 0
  },
  {
    nome: "Rhodes",
    jogada: 0
  },
  {
    nome: "Beach",
    jogada: 0
  },
  {
    nome: "Laurel",
    jogada: 0
  },
  {
    nome: "Beatrice",
    jogada: 0
  },
  {
    nome: "Alison",
    jogada: 1
  },
  {
    nome: "Saundra",
    jogada: 0
  },
  {
    nome: "Klein",
    jogada: 0
  }
]

function solucao(jogadores) {
  const jogadas = [];

  jogadores.forEach(x => jogadas.push(x.jogada));

  const soma = jogadas.reduce((acc, item) => acc += item);

  if (soma == 1) {
    const indice = jogadas.indexOf(1);
    console.log(jogadores[indice].nome)
  } else if (soma == jogadas.length - 1) {
    const indice = jogadas.indexOf(0)
    console.log(jogadores[indice].nome)
  } else {
    console.log('NINGUEM')
  }
}

solucao(jogadores);