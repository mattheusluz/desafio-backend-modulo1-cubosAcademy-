const input = `5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7`;

function maiorDistacia(input) {
  const linhas = input.trim().split('\n');
  const n = parseFloat(linhas[0], 10);

  const coordenadas = [];
  for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(' ');
    coordenadas.push({
      x: parseFloat(coord[0]),
      y: parseFloat(coord[1])
    })
  }

  let distancias = [];

  for (let index = 0; index < coordenadas.length; index++) {
    const posicaoPrimeiraPessoa = coordenadas[index];

    for (let index2 = index + 1; index2 < coordenadas.length; index2++) {
      const posicaoSegundaPessoa = coordenadas[index2];
      let diferenca = Math.sqrt((posicaoSegundaPessoa.x - posicaoPrimeiraPessoa.x) ** 2 + (posicaoSegundaPessoa.y - posicaoPrimeiraPessoa.y) ** 2);
      distancias.push(diferenca);
    }
  }

  const maiorDistacia = distancias.reduce((acc, i) => Math.max(acc, i), 0);

  console.log(maiorDistacia);
}

maiorDistacia(input);