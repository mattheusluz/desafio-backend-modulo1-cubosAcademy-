const input = `cubos
cugogyooos`


function verificaSenha(input) {
  const linhas = input.trim().split('\n');
  const senhaCerta = linhas[0];
  const senhaDigitada = linhas[1];

  const arraySenha = senhaDigitada.split('');
  const letraEncontrada = [];
  let indexAtual = 0;

  arraySenha.forEach(letra => {

    const letraAtualDaSenhaCerta = senhaCerta[indexAtual];

    if (letra === letraAtualDaSenhaCerta) {
      letraEncontrada.push(letra)
      indexAtual++
    }
  })

  const senhaTratada = letraEncontrada.join('');

  if (senhaCerta === senhaTratada) {
    console.log('SIM')
  } else {
    console.log('NAO')
  }
}

verificaSenha(input);