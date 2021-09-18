const precos = [200, 150, 50, 100];

function solucao(precos) {
  if (precos.length > 2) {
    const menorPreco = precos.reduce((acc, item) => acc > item ? item : acc);
    const desconto = menorPreco / 2;
    const indiceMenorPreco = precos.indexOf(menorPreco);

    precos.splice(indiceMenorPreco, 1, desconto)

    const soma = precos.reduce((acc, item) => acc += item);
    console.log(soma);
  } else {
    const soma = precos.reduce((acc, item) => acc += item);
    console.log(soma);
  }
}

solucao(precos);