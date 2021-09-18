const input = 'MATHEUS';

function processData(input) {
  let inputTratado = '';

  if (input === input.charAt(0).toLowerCase() + input.substr(1).toUpperCase()) {
    inputTratado = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
    console.log(inputTratado)
  } else if (input === input.toUpperCase()) {
    inputTratado = input.toLowerCase();
    console.log(inputTratado);
  } else {
    console.log(input);
  }
}

processData(input);