const texto = '   Cuidado, pois deixam    espacos        vazios no fim do texto sem querer    ';

function solucao(texto) {
  //const textoTratado = texto.trim();
  const array = texto.split(' ');
  const arrayValido = array.filter(x => x.length);

  const quantidadeDePalavras = arrayValido.length;
  console.log(quantidadeDePalavras);
}

solucao(texto);