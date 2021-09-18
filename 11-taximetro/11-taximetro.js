const min = 25;
const km = 11.5;

function solucao(min, km) {

  let valorTotal = 0;
  let valorPorMinuto = 0;
  let valorPorKm = 0;

  if (min <= 20 && km <= 10) {
    valorTotal = (min * 50) + (km * 70);
  } else if (min > 20 && km <= 10) {
    valorPorMinuto = 20 * 50 + (min - 20) * 30;
    valorTotal = valorPorMinuto + (km * 70);
  } else if (min > 20 && km > 10) {
    valorPorMinuto = 20 * 50 + (min - 20) * 30;
    valorPorKm = 10 * 70 + (km - 10) * 50;
    valorTotal = valorPorMinuto + valorPorKm;
  } else if (min <= 20 && km > 10) {
    valorPorMinuto = min * 50;
    valorPorKm = 10 * 70 + (km - 10) * 50;
    valorTotal = valorPorMinuto + valorPorKm;
  }

  console.log(Math.trunc(valorTotal));
}

solucao(min, km);