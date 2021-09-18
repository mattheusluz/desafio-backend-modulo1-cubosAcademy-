const lista = [12, 48, 27];

function solucao(lista) {
  let permitidos = [];
  lista.forEach(x => {
    if (x >= 18) {
      permitidos.push(x)
    }
  })

  if (permitidos.length) {
    const cacula = permitidos.reduce((acc, item) => acc > item ? item : acc);
    console.log(cacula)
  } else {
    console.log('CRESCA E APARECA')
  }
}

solucao(lista);