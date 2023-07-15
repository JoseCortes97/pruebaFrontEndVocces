// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.
function findUniq(arr) {
  //regresa el valor en caso que exista un valir unico de lo contrario retorna undefined
  return arr.find(element => arr.indexOf(element) === arr.lastIndexOf(element));
}
/**
 * TEST Ejercicio 1
 */
findUniq(['12', 10, '12', 11, 1, 11, 10, '12']) // 1
findUniq(['Capitán América', 'Hulk', 'Deadpool', 'Capitán América', 'Hulk', 'Wonder Woman', 'Deadpool', 'Iron Man', 'Iron Man']) // 'Wonder Woman'
