// FUNDAMENTOS DE PROGRAMACIÃ“N - PRÃCTICA
// Nombre del estudiante: _________________
// Fecha: _________________

// ============================================
// SECCIÃ“N 1: VARIABLES Y TIPOS DE DATOS (10 puntos)
// ============================================

/**
 * Ejercicio 1.1: Declarar variables (2 puntos)
 * Crea tres variables con tu informaciÃ³n personal
 * @returns {Object} - Objeto con nombre, edad y carrera
 */
function miInformacion() {
  // TODO: Declara las variables nombre, edad y carrera
  // Ejemplo: const nombre = "Juan";
  //Ejercicio 1 terminado
  const nombre = "Marcelo Medina Canto";
  const edad = 67;
  const carrera = "TSW";
  //Modificacion de prueb
  return { nombre, edad, carrera };
}

/**
 * Ejercicio 1.2: Operaciones aritméticas básicas (3 puntos)
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {Object} - Objeto con suma, resta, multiplicación y división
 */
function operacionesBasicas(a, b) {
  // Calcula suma, resta, multiplicación y división de a y b
  const suma = a + b;
  const resta = a - b;
  const multiplicacion = a * b;
  const division = b !== 0 ? a / b : null; // evita división entre cero

  return { suma, resta, multiplicacion, division };
}

/**
 * Ejercicio 1.3: Área de un rectángulo (2 puntos)
 * @param {number} base - Base del rectángulo
 * @param {number} altura - Altura del rectángulo
 * @returns {number} - Área del rectángulo
 */
function areaRectangulo(base, altura) {
  // Calcula y retorna el área (base * altura)
  return base * altura;
}

/**
 * Ejercicio 1.4: Conversión de temperatura (3 puntos)
 * Convierte grados Celsius a Fahrenheit
 * Fórmula: F = C * 9/5 + 32
 * @param {number} celsius - Temperatura en Celsius
 * @returns {number} - Temperatura en Fahrenheit
 */
function celsiusAFahrenheit(celsius) {
  // Implementa la conversión
  return (celsius * 9 / 5) + 32;
}

// ============================================
// SECCIÃ“N 2: CONDICIONALES (15 puntos)
// ============================================

/**
 * Ejercicio 2.1: Número par o impar (3 puntos)
 * @param {number} numero - Número a evaluar
 * @returns {string} - "par" o "impar"
 */
function parOImpar(numero) {
  // Usa el operador % (módulo) para determinar si es par o impar
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

/**
 * Ejercicio 2.2: Calificación (4 puntos)
 * @param {number} nota - Nota del 0 al 100
 * @returns {string} - "Aprobado" si nota >= 60, "Reprobado" si no
 */
function evaluarNota(nota) {
  // Implementa la lógica con if/else
  if (nota >= 60) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
}

/**
 * Ejercicio 2.3: El mayor de tres números (4 puntos)
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @param {number} c - Tercer número
 * @returns {number} - El número mayor
 */
function mayorDeTres(a, b, c) {
  // Encuentra y retorna el mayor de los tres números
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

/**
 * Ejercicio 2.4: Clasificación de edad (4 puntos)
 * @param {number} edad - Edad de la persona
 * @returns {string} - "menor" (0-17), "adulto" (18-64), "mayor" (65+)
 */
function clasificarEdad(edad) {
  // Implementa la clasificación con if/else if/else
  if (edad >= 0 && edad <= 17) {
    return "menor";
  } else if (edad >= 18 && edad <= 64) {
    return "adulto";
  } else if (edad >= 65) {
    return "mayor";
  } else {
    return "edad inválida"; // Por si se ingresa un número negativo
  }
}

// ============================================
// SECCIÃ“N 3: FUNCIONES Y BUCLES (20 puntos)
// ============================================

/**
 * Ejercicio 3.1: Factorial (5 puntos)
 * Calcula el factorial de un número (n! = n * (n-1) * (n-2) * ... * 1)
 * Ejemplo: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 * @param {number} n - Número entero positivo
 * @returns {number} - Factorial de n
 */
function factorial(n) {
  // Implementa usando un bucle for
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

/**
 * Ejercicio 3.2: Suma de números del 1 al n (4 puntos)
 * @param {number} n - Número límite
 * @returns {number} - Suma de 1 + 2 + 3 + ... + n
 */
function sumaHastaN(n) {
  let suma = 0; // Variable acumuladora

  // Recorre los números del 1 hasta n
  for (let i = 1; i <= n; i++) {
    suma += i; // Acumula cada número
  }

  return suma; // Devuelve el total
}

/**
 * Ejercicio 3.3: Tabla de multiplicar (5 puntos)
 * @param {number} numero - Número para generar su tabla
 * @returns {Array} - Array con los resultados de numero x 1 hasta numero x 10
 * Ejemplo: tablaMultiplicar(3) debe retornar [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
 */
function tablaMultiplicar(numero) {
  // Genera un array con la tabla de multiplicar
  const tabla = [];

  for (let i = 1; i <= 10; i++) {
    tabla.push(numero * i);
  }

  return tabla;
}

/**
 * Ejercicio 3.4: Números pares hasta n (6 puntos)
 * @param {number} n - Número límite
 * @returns {Array} - Array con todos los números pares desde 2 hasta n
 * Ejemplo: numerosPares(10) debe retornar [2, 4, 6, 8, 10]
 */
function numerosPares(n) {
  // Crea un array con todos los números pares hasta n
  const pares = [];

  for (let i = 2; i <= n; i += 2) {
    pares.push(i);
  }

  return pares;
}


// ============================================
// SECCIÃ“N 4: ARRAYS (25 puntos)
// ============================================

/**
 * Ejercicio 4.1: Suma de elementos de un array (4 puntos)
 * @param {Array<number>} numeros - Array de números
 * @returns {number} - Suma de todos los elementos
 */
function sumaArray(numeros) {
  // Suma todos los elementos del array
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma;
}

/**
 * Ejercicio 4.2: Promedio de un array (5 puntos)
 * @param {Array<number>} numeros - Array de números
 * @returns {number} - Promedio de los números
 */
function promedioArray(numeros) {
  // Calcula el promedio (suma total / cantidad de elementos)
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  // Evita división por cero si el array está vacío
  if (numeros.length === 0) {
    return 0;
  }

  return suma / numeros.length;
}

/**
 * Ejercicio 4.3: Encontrar el máximo (6 puntos)
 * @param {Array<number>} numeros - Array de números
 * @returns {number} - El número más grande del array
 */
function encontrarMaximo(numeros) {
  // Verifica que el array no esté vacío
  if (numeros.length === 0) {
    return 0;
  }

  // Opción 1: Usando Math.max y el operador spread (...)
  return Math.max(...numeros);
}

/**
 * Ejercicio 4.4: Filtrar números mayores a un valor (5 puntos)
 * @param {Array<number>} numeros - Array de números
 * @param {number} limite - Valor límite
 * @returns {Array<number>} - Nuevo array solo con números mayores al límite
 * Ejemplo: filtrarMayores([1, 5, 3, 8, 2], 4) debe retornar [5, 8]
 */
function filtrarMayores(numeros, limite) {
  // Crea un nuevo array con solo los números mayores al límite
  const mayores = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
      mayores.push(numeros[i]);
    }
  }

  return mayores;
}

/**
 * Ejercicio 4.5: Invertir un array (5 puntos)
 * @param {Array} arr - Array a invertir
 * @returns {Array} - Nuevo array con los elementos en orden inverso
 * Ejemplo: invertirArray([1, 2, 3, 4]) debe retornar [4, 3, 2, 1]
 */
function invertirArray(arr) {
  // Invierte el orden de los elementos manualmente
  const invertido = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    invertido.push(arr[i]);
  }

  return invertido;
}
// ============================================
// SECCIÃ“N 5: ARRAYS BIDIMENSIONALES (30 puntos)
// PreparaciÃ³n para matrices
// ============================================

/**
 * Ejercicio 5.1: Crear una matriz (6 puntos)
 * Crea una matriz de filas x columnas llena de ceros
 * @param {number} filas - Número de filas
 * @param {number} columnas - Número de columnas
 * @returns {Array<Array<number>>} - Matriz de ceros
 * Ejemplo: crearMatriz(2, 3) debe retornar [[0, 0, 0], [0, 0, 0]]
 */
function crearMatriz(filas, columnas) {
  // Crea una matriz de filas x columnas llena de ceros
  const matriz = [];

  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(0);
    }
    matriz.push(fila);
  }

  return matriz;
}

/**
 * Ejercicio 5.2: Suma de elementos de una matriz (6 puntos)
 * @param {Array<Array<number>>} matriz - Matriz de números
 * @returns {number} - Suma de todos los elementos
 * Ejemplo: sumaMatriz([[1, 2], [3, 4]]) debe retornar 10
 */
function sumaMatriz(matriz) {
  // Suma todos los elementos de la matriz
  let suma = 0;

  for (let i = 0; i < matriz.length; i++) {          // Recorre las filas
    for (let j = 0; j < matriz[i].length; j++) {     // Recorre las columnas
      suma += matriz[i][j];                          // Acumula cada elemento
    }
  }

  return suma;
}

/**
 * Ejercicio 5.3: Obtener una fila (5 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceFila - Índice de la fila (empezando en 0)
 * @returns {Array<number>} - La fila especificada
 * Ejemplo: obtenerFila([[1, 2], [3, 4], [5, 6]], 1) debe retornar [3, 4]
 */
function obtenerFila(matriz, indiceFila) {
  // Retorna la fila indicada
  return matriz[indiceFila];
}


/**
 * Ejercicio 5.4: Obtener una columna (7 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceColumna - Ãndice de la columna (empezando en 0)
 * @returns {Array<number>} - Array con los elementos de la columna
 * Ejemplo: obtenerColumna([[1, 2], [3, 4], [5, 6]], 0) debe retornar [1, 3, 5]
 */
function obtenerColumna(matriz, indiceColumna) {
  // TODO: Extrae todos los elementos de la columna indicada
  const columna = [];
  return columna;
}

/**
 * Ejercicio 5.5: Transponer una matriz (6 puntos)
 * La transpuesta intercambia filas por columnas
 * @param {Array<Array<number>>} matriz - Matriz original
 * @returns {Array<Array<number>>} - Matriz transpuesta
 * Ejemplo: transponer([[1, 2, 3], [4, 5, 6]]) debe retornar [[1, 4], [2, 5], [3, 6]]
 */
function transponer(matriz) {
  // TODO: Crea la matriz transpuesta
  const transpuesta = [];
  return transpuesta;
}

// ============================================
// NO MODIFIQUES ESTA LÃNEA - NECESARIA PARA LOS TESTS
// ============================================
module.exports = {
  miInformacion,
  operacionesBasicas,
  areaRectangulo,
  celsiusAFahrenheit,
  parOImpar,
  evaluarNota,
  mayorDeTres,
  clasificarEdad,
  factorial,
  sumaHastaN,
  tablaMultiplicar,
  numerosPares,
  sumaArray,
  promedioArray,
  encontrarMaximo,
  filtrarMayores,
  invertirArray,
  crearMatriz,
  sumaMatriz,
  obtenerFila,
  obtenerColumna,
  transponer
};
