/*function piramide(niveles, caracter) {
  let resultado = '';
  for (let i = 1; i <= niveles; i++) {
    let espacios = ' '.repeat(niveles - i);
    let simbolos = caracter.repeat(i * 2 - 1  );
    resultado += espacios + simbolos + '\n';
  }
  return resultado;
}
console.log(piramide(3, 'B'))*/



function tirarDado(numeroFavorecido, probabilidad) {
  if (numeroFavorecido < 1 || numeroFavorecido > 6) {
    throw new Error("El número favorecido debe estar entre 1 y 6.");
  }
  if (probabilidad < 0 || probabilidad > 1) {
    throw new Error("La probabilidad debe estar entre 0 y 1.");
  }

  const otros = [1, 2, 3, 4, 5, 6].filter(n => n !== numeroFavorecido);
  const probabilidadRestante = 1 - probabilidad;
  const probabilidadOtros = probabilidadRestante / otros.length;

  // Creamos una lista con los números repetidos proporcionalmente a su probabilidad
  let listaProbabilidad = [];

  for (let i = 0; i < probabilidad * 100; i++) {
    listaProbabilidad.push(numeroFavorecido);
  }

  for (let n of otros) {
    for (let i = 0; i < probabilidadOtros * 100; i++) {
      listaProbabilidad.push(n);
    }
  }

  // Seleccionamos aleatoriamente un número de la lista
  const indice = Math.floor(Math.random() * listaProbabilidad.length);
  const dado = listaProbabilidad[indice];

  return dado;
}

// Ejemplo: Favorecer el 6 con una probabilidad del 40%
console.log(tirarDado(6, 0.4));

function simularTiros(cantidad, probState) {
  const resultados = [];
  for (let i = 0; i < cantidad; i++) {
    resultados.push(tirarDado(probState.number, probState.probability)); // Esta función ya la tienes definida
  }
  return resultados;
}

function calcularFrecuencias(tiros) {
  const frecuencias = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };

  for (const tiro of tiros) {
    if (frecuencias[tiro] !== undefined) {
      frecuencias[tiro]++;
    }
  }

  return frecuencias;
}

const tiros = simularTiros(1000, {number: 6, probability: 0.5});
const frecs = calcularFrecuencias(tiros);

console.log(frecs);
