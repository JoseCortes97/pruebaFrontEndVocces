// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop(arr) {
    const counter = arr.reduce((count, element) => {
      count[element] = (count[element] || 0) + 1;
      return count;
    }, {});
    
    const sortedElements = Object.entries(counter).sort((a, b) => b[1] - a[1]);
    
    const mostRepeatedElements = sortedElements.slice(0, 3).map(([element]) => {
      return isNaN(element) ? element : Number(element);
    });
  
    return mostRepeatedElements;
  } 

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]) // [ 1, 3, 2 ]
numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3]) // [ 'a', 3, 2 ]
