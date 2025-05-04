function Piramide(niveles, caracter) {
  let resultado = '';
  for (let i = 1; i <= niveles; i++) {
    let espacios = ' '.repeat(niveles - i);
    let simbolos = caracter.repeat(i * 2 - 1  );
    resultado += espacios + simbolos + '\n';
  }
  return resultado;
}
console.log(Piramide(3, 'B'))