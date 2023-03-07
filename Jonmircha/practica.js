
//Clase 31 
//Expresiones regulares

// Secuencia de caracteres que forman un patrón de búsqueda
// Tiene diferentes banderas, agunas de ellas son:
// g Incluye todas las coincidencias
// i Ignora mayúsculas y minúsculas
//[] Listado válido

// let cadena = "1234567987. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab eum consequuntur ducimus dicta modi maxime nulla. Asperiores eum nihil sunt assumenda placeat doloremque blanditiis nam iste, omnis, exLorem ipsum dolor sit amet consectetur adipisicing elit. 159974564"

// let regex = /Lorem/gi;
// console.log(regex.test(cadena))
// console.log(cadena.match(regex).length)
// console.log(cadena.match(regex))
// console.log(regex.exec(cadena))

// let regex2 = /L/gi;
// console.log(regex2.test(cadena))
// console.log(cadena.match(regex2).length)
// console.log(cadena.match(regex2))
// console.log(regex2.exec(cadena))

// let num = /[1-9]/gi;
// console.log(num.test(cadena))
// console.log(cadena.match(num).length)
// console.log(cadena.match(num))
// console.log(num.exec(cadena))

//Clase 32 
//Funciones anónimas autoejecutables

//Encapsular código
//Una funci+on en la que se engloba todo el código que quieres utilizar
//Está portejido de efectos secundarios

//Versión clásica
// (function(){
// console.log("Primer funcion")
// })();

// //Versión clásica ejemplo
// (function(d,w,c){
//     console.log("Segunda funcion");
//     console.log(d);
//     console.log(w);
//     console.log(c);
//     })(document,window,console);

// //Versión Facebook
// !function(){
//     console.log("Versión Facebook");
// }();

// //Versión Unaria
// +function(){
//     console.log("Versión Unaria");
// }();

//Clase 33 
//Módulos import y export

//Para mandar a llamar de archivos javascript a otros
//Siempre se colocan al inicio del código
//Se puede exportar sólo lo que se necesita
//No hace falta exportar todo

// //Exportar módulos

// function sumar(a,b){
//     return a + b;
// };
// function restar(a,b){
//     return a - b;
// }
// //Englobar funciones en un objeto
// //Default sólo se puede hacer una vez por exportación
// //Sólo funciona en funciones declaradas, no en funciones expresadas
// export default const aritmetica = {
//     sumar,
//     restar
// } 

// //Importar módulos 
// //Misma carpeta
// import {aritmetica} from "./aritmetica.js"
// //Carpeta anterior
// import {aritmetica.sumar(10,15)} from "../aritmetica.js"

// //Importar por default se escribe por fuera de las llaves
//import aritmetica {} from './ejemplo.js'

// //Importar asignándole otro nombre
// import {aritmetica as calculos} from './aritmetica.js'
// //Ahora aritmética se llamará cálculos


//Ejercicios de Lógica
//Validación de funciones

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

//Función declarada
//  function contar(cadena = ""){
// if (!cadena) {
//     console.warn("No ingresaste ninguna cadena")
// } else {
//     console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
// }
// }
// contar("Hola Mundo");
// contar()

//Función expresada + Arrow function
// const contar = (cadena = '') => (!cadena) 
//  ? console.warn("No ingresaste ninguna cadena") 
//  : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

// contar("Hola Mundo");
// contar()

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

//Función expresada
// const recortarTexto = (cadena = '', longitud = undefined) => (!cadena)
// ? console.warn('No ingresaste una cadena de texto')
// : (longitud === undefined)
//  ? console.warn('No ingresaste longitud para recortar el texto')
//  : console.info(cadena.slice(0,longitud))
//Pruebas
// recortarTexto()
// recortarTexto('Hola Hola')
// recortarTexto('Hola Mundo', 4)
// recortarTexto('Hola Mundo, qué tal te va', 15)


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

//Función expresada
// const cadenaArreglo = (cadena = '', separador = undefined) => (!cadena)
// ? console.warn('No ingresaste una cadena')
// : (separador === undefined)
//  ? console.warn('No ingresaste caracter separador')
//  : console.info(cadena.split(separador))

//Pruebas
// cadenaArreglo('Hola')
// cadenaArreglo('', ' ')
// cadenaArreglo('Hola como estas que tal tu dia como ejemplo ejemplo', ' ')
// cadenaArreglo('Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Nov,Dic', '')
// cadenaArreglo('Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Nov,Dic', ' ')
// cadenaArreglo('Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Nov,Dic', ',')



// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// //Return para no ejecutar la función completa si se ha encontrado la validación
// const repetirTexto = (cadena = '', repetidor = undefined) => {
//     if(!cadena) return console.warn('No ingresaste cadena de texto');
//     if(repetidor === undefined) return console.warn('No ingresaste un repetidor');
//     if(repetidor === 0) return console.error('Numero de veces no puede ser 0')
//     if(Math.sign(repetidor) === -1) return console.error('El número no puede ser negativo')

//     for (let i = 1; i <= repetidor; i++) console.info(`${cadena}, ${i}`)
//     }
//Pruebas
//     repetirTexto('', 2)
//     repetirTexto('Hola')
//     repetirTexto('Hola', 4)
//     repetirTexto('Hola', 0)
//     repetirTexto('Hola', -10)
//     repetirTexto('Maqui', 5)


// 5) Programa una función que invierta las palabras de una cadena de texto.

// const invertirCadena = (cadena = '') => 
//     (!cadena)
//     ? console.warn('No ingresaste texto')
//     : console.info(cadena.split('').reverse().join(''))
//Pruebas
// invertirCadena('Hola Mundo')
// invertirCadena('Cadena de texto de prueba para invertir ejemplo ejemplo')
// invertirCadena('Me gusta la programación')


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo.

// const contar = (cadena = '', texto = '') => {  
// if (!cadena) return console.warn('No ingresaste texto')
// if (!texto) return console.warn('No ingresaste palabra a evaluar')

// let i = 0,
// contador = 0;

// while(i !== -1) {
//     i = cadena.indexOf(texto,i);
// if(i !== -1) {
//     i++;
//     contador++;
//   }
// }
// return console.info(`La variable ${texto} se repite ${contador} veces.`)
// }
//Pruebas
// contar("Hola mundo chau mundo que ta mundo", "mundo")
// contar("hola me llamo hola como estas", "hola")
// contar("hola que tal")
// contar("", "Hola")


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo.

// const capicua = (palabra = '') => {  
//     if (!palabra) return console.warn('No ingresaste texto')
        
//     palabra = palabra.toLocaleLowerCase()
//     let alReves = palabra.split("").reverse().join("")
//     return (palabra === alReves)

//     ? console.info(`Si es capicua, palabra original ${palabra}, palabra al reves ${alReves}`)
//     : console.info(`No es capicua, palabra original ${palabra}, palabra al reves ${alReves}`)
//   }
//Pruebas
//   capicua("salas")
//   capicua("neven")
//   capicua("hola")
//   capicua("")


//8) Programa una función que elimine cierto patrón de caracteres de un texto dado.

// const eliminarTexto = (texto = "", patron = undefined) =>
// (!texto)
// ? console.warn("No ingresaste texto")
// : (!patron)
//  ? console.warn("No ingresaste patron")
//  : console.info(texto.replace(new RegExp(patron,"ig"), ""))

//Pruebas
// eliminarTexto
// eliminarTexto("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
// eliminarTexto("Lorem opse ipsum opsamfu emsop", "o")
// eliminarTexto("askjaen dcviencafsdf cvnadj eicaj efjni ii se","e")
// eliminarTexto("askjaen dcviencafsdf cvnadj eicaj efjni ii se","i")

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

// const random = () => console.info(Math.round(Math.random() * 100) + 500)

// random()

// 10) Programa una función que reciba un número y evalúe si es capicúa o no.

// const capicua = (numero = 0) => {  
// if (!numero) return console.warn('No ingresaste numero');
// //Validacion de tipo de dato
// if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un numero`);
// //Convertir numero a string
// numero = numero.toString();
// let alReves = numero.split("").reverse().join("");

// return(numero === alReves) 
// ? console.info(`Si es capicua ${numero} original, numero ${alReves}`)
// : console.info(`No es capicua ${numero} original, numero ${alReves}`)
//   }
//Pruebas
// capicua()
// capicua(0)
// capicua(-10)
// capicua(151)
// capicua(125.99)
// capicua(2002) 
// capicua(212.212)


// 11) Programa una función que calcule el factorial de un número.

// const factorialNumero = (numero = undefined) => {
// //Validaciones
// if(numero === undefined) return console.warn("No ingresaste un numero");
// if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un numero`);
// if(numero === 0) return console.error('El numero no puede ser 0');
// if(Math.sign(numero) === -1) return console.error('El numero no puede ser negativo')

// //Declaracion de variable
// let factorial = 1;

// //Decrementar variable
// for (let i = numero; i > 1 ; i--) {
//  factorial *= i;
// }
// return console.info(`El factorial de ${numero} es ${factorial}`)
// }
//Pruebas
// factorialNumero()
// factorialNumero("50")
// factorialNumero(0)
// factorialNumero(-10)
// factorialNumero(5)


// 12) Programa una función que determine si un número es primo.

// const esPrimo = (num = undefined) => {
// //Validaciones
// if(num === undefined) return console.warn('No ingresaste un numero');
// if(num === 0) return console.error('Numero no puede ser igual a 0');
// if(num === 1) return console.error('Numero no puede ser igual a 1');
// if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un numero`);
// if(Math.sign(num) === -1) return console.error('El numero no puede ser negativo')

//Solucion
// let divisible = false;

// for (let i = 2; i < num; i++) {  
// if ((num % i) === 0){
//  divisible = true;
//  break;
//   } 
// }
// return (divisible)
// ? console.log(`El numero ${num} no es primo`)
// : console.log(`El numero ${num} es primo`)
// }
//Pruebas
// esPrimo()
// esPrimo(0)
// esPrimo(1)
// esPrimo(-10)
// esPrimo("10")
// esPrimo(true)
// esPrimo(13)
// esPrimo(20)


//13) Programa una función que determine si un número es par o impar.

// const parImpar = (numero = undefined) => {
// if(numero === undefined) return console.warn('No ingresaste un numero');
// if(typeof numero !== 'number') return console.error('El valor ingresado no es un numero');

// return ((numero % 2) === 0) 
// ? console.info(`El numero ${numero} es primo`)
// : console.info(`El numero ${numero}  no es primo`)
// }
//Pruebas
// parImpar()
// parImpar('10')
// parImpar(11)
// parImpar(12)


// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa.
// const convertirGrados = (grados = undefined, unidad = undefined) => {
// //Validaciones
// if (!grados) return console.warn('No ingresaste los grados');
// if(typeof grados !== 'number') return console.error('Valor ingresado no es un numero');
// if (unidad === undefined) return console.warn('No ingresaste grados a convertir');
// if(typeof unidad !== "string") return console.error('Valor ingresado no es una cadena de texto');
// if(unidad.length !== 1 || !/(C|F)/.test(unidad) ) return console.warn('Valor no reconocido');
// //Solucion
// if(unidad === 'C'){
//  return console.info(`${grados}C = ${Math.round((grados * (9/5)) + 32)}F`);
// } else if(unidad === 'F') {
//  return console.log(`${grados}F = ${Math.round(((grados-32)*5/9))} C`)
// }
// }
//Pruebas
// convertirGrados();
// convertirGrados("10");
// convertirGrados(2);
// convertirGrados(1, true);
// convertirGrados(2, 'Hola');
// convertirGrados(2, "H");
// convertirGrados(100,'C');
// convertirGrados(10, 'C');
// convertirGrados(100, 'F');



// 15) Programa una función para convertir números de base binaria a decimal y viceversa.
//Nota: si cambio base a 0 no me registra el punto en el que base es undefined. Ejemplo de porque inicializar las variiables en 0 o undefined.
// const binarioaDecimal = (numero = undefined, base = undefined) => {
// //Validaciones
// if(numero === undefined) return console.warn('No ingresaste numero a convertir');
// if(typeof numero !== 'number') return console.error('Valor ingresado no es un numero');
// if(base === undefined) return console.warn('No ingresaste numero de base');
// if(typeof base !== 'number') return console.error('Valor ingresado no es valido');

// //Solucion
// if(base === 2){ 
// return console.info(`${numero} base = ${parseInt(numero,base)} base 10`);
// }else if(base === 10){
// return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`);
// }
// }

// //Pruebas
// binarioaDecimal()
// binarioaDecimal(10)
// binarioaDecimal("10")
// binarioaDecimal('Hola',2)
// binarioaDecimal(10,true)
// binarioaDecimal(111011001,2)
// binarioaDecimal(11100100,2)


// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada.

//Validaciones
// const aplicarDescuento = (precio= undefined, descuento= 0) => {
// if(precio === undefined) return console.warn('No ingreso un precio a evaluar');
// if(precio === 0) return console.warn('Precio no puede ser 0');
// if(typeof precio !== 'number') return console.error('Precio ingresado no es un numero');
// if(Math.sign(precio) === -1) return console.error('El precio no puede ser negativo');
// if(descuento === undefined) return console.warn('No ingreso un descuento a evaluar');
// if(descuento === 0) return console.warn('Descuento no puede ser igual a 0');
// if(typeof descuento !== 'number') return console.error('Descuento ingresado no es un numero');
// if(Math.sign(descuento) === -1) return console.error('El descuento no puede ser negativo');

// //Solucion
// return console.info(`${precio} - ${descuento}% = ${precio - ((precio*descuento) /100)}`)
// }

// //Pruebas
// aplicarDescuento(undefined, 200)
// aplicarDescuento(1000, undefined)
// aplicarDescuento(0,200)
// aplicarDescuento(1000,0)
// aplicarDescuento(true, 200)
// aplicarDescuento(1000,false)
// aplicarDescuento(-1000,200)
// aplicarDescuento(1000,-537)
// aplicarDescuento(1000,20)
// aplicarDescuento(12576,35)


// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy.

// const calcularAnios = (fecha = undefined) => {
//  if (fecha === undefined) return console.warn('No ingresaste una fecha')
//  if (!(fecha instanceof Date)) return console.error('No ingresaste una fecha valida')
 
//  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
//  aniosEnMs = 1000 * 60 * 60 * 24 * 365,
//  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs)

//  return (Math.sign(aniosHumanos) === -1)
//  ? console.info(`Faltan ${aniosHumanos} para el año ${fecha.getFullYear()}.`)
//  : (Math.sign(aniosHumanos) === 1)
//    ? console.info(`Han pasado ${aniosHumanos} desde ${fecha.getFullYear()}.`)
//    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
// }

//Pruebas
// calcularAnios();
// calcularAnios({})
// calcularAnios(false);
// calcularAnios(new Date());
// calcularAnios(new Date(2084,2,16));
// calcularAnios(new Date(1976,3,16));



// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

// const extraerCaracter = (texto = undefined) => {
//  if (texto === undefined) return console.warn('No has ingresado texto')
//  if (typeof texto !== 'string') return console.error('Valores ingresados no son validos')
 
//  let vocales = texto.match(/[aeiou]/gi);
//  let consonantes = texto.match(/[bcdfghjklmnpqrstvwxyz]/gi);
   
 
//  return console.info(`Vocales: ${vocales.length}, Consonantes: ${consonantes.length}.`)
// }

// extraerCaracter();
// extraerCaracter(true);
// extraerCaracter('Hola mundo');
// extraerCaracter('aaaaaa rrrrrr');
// extraerCaracter('Hola como estas que tal tu dia aoe');


// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

// const nombreValido = (nombre = '') => {
 
//  //Validaciones
//  if(!nombre) return console.warn('No has ingresado un nombre');

//  if(!(/[a-zA-Z]/.test(nombre))) return console.warn('Nombre tiene que contener letras');
//  if(nombre.length === 1) return console.warn('No ingresaste suficientes letras');
//  if(typeof nombre !== 'string') return console.error('Valor ingresado no es valido');
//  if (/^[0-9]/.test(nombre)) return console.error('No puede comenzar con un numero')
 
//  //Solucion
//  let regex = /^[A-Za-zÑñ\s]+$/g.test(nombre);
 
//  return(regex)
//  ? console.info(`"${nombre}" es un nombre valido`)
//  : console.info(`"${nombre}" no es un nombre valido`)
// }

// //Pruebas
// nombreValido()
// nombreValido(5465)
// nombreValido('a')
// nombreValido(true)
// nombreValido('1Maca')
// nombreValido('Macarena Castillo Ruiz')


// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

// const validarMail = (email = undefined) => {

//  if(email === undefined) return console.warn('No has ingresado un email')
//  if(typeof email !== 'string') return console.error(`El valor "${email}" no es una cadena de texto`)


//  let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(email);
 
//  return (patron)
//  ? console.info(`"${email}" es un email valido`)
//  : console.info(`"${email}" no es un email valido`)
// }
// validarMail()
// validarMail(10)
// validarMail('Macarena')
// validarMail('macarena@gmail.com')


// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

// const elevarCuadrado = (array = undefined) => {
 
//  //Validaciones de array y numeros que tiene dentro
//  if(array === undefined) return console.warn('No has ingresado un valor a evaluar');
//  if(array.length === 0) return console.warn('El array esta vacio');
//  if(!(array instanceof Array)) return console.error('Valor ingresado no es un array');
//  for (num of array){
//   if(typeof num !== 'number') return console.error('Valor ingresado no es un numero')
//  }  

//  //Solucion
//  const newArray = array.map(el => el * el);
//  return console.info(`Array original: ${array}/ Array elevado al cuadrado: ${newArray}`)
// }

// elevarCuadrado()
// elevarCuadrado([])
// elevarCuadrado(false)
// elevarCuadrado(["hola"])
// elevarCuadrado([2,3,4])
// elevarCuadrado([12,11,15])


// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

// const maximoMinimo = (arr = undefined) => {
 
//  if(arr === undefined) return console.warn('No has ingresado un array a evaluar')
 
//  if(arr.length === 0) return console.warn('El array esta vacio')
 
//  if(!(arr instanceof Array)) return console.error('Valor ingresado no es un array')
 
//  for(num of arr){
//   if(typeof num !== 'number') return console.error(`El valor "${num}" no es un numero`)
//  } 

//  return console.info(`Valor original: ${arr}\n Valor minimo: ${Math.max(...arr)}\n Valor maximo: ${Math.min(...arr)}`); 

// }

// maximoMinimo();
// maximoMinimo([]);
// maximoMinimo("Hola");
// maximoMinimo([10,20,false]);
// maximoMinimo([10,53,11,75,99]);
// maximoMinimo([3,-10,52,78,100]);


// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 

// const paresImpares = (arr = undefined)  => {
// if(arr === undefined) return console.warn('No ha ingresado valores a evaluar');
// if(arr.length === 0) return console.warn('El array no puede estar vacio');
// if(!(arr instanceof Array)) return console.error('El valor ingresado debe ser un array');
// for(num of arr){
//  if(typeof num !=='number') return console.error(`El valor "${num}" debe ser un numero`);    
// }
// return console.info(
//  {
//   pares : arr.filter(num => num % 2 === 0),
//   impares : arr.filter(num => num % 2 === 1)
//  });
// }
// //Pruebas
// paresImpares();
// paresImpares(true);
// paresImpares([]);
// paresImpares(['Hola', 10, 20]);
// paresImpares([1,2,3,4,5,6,7,8,9,0]);
// paresImpares([1,2,3,4,5,6,7,8,9,-10,25,39,64]);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente.

//Validaciones
// const ordenarNumeros = (arr = undefined) => {
//  if(arr === undefined) return console.warn('No has ingresado un array');
//  if(arr.length === 0) return console.warn('El array no puede estar vacio');
//  if(!(arr instanceof Array)) return console.error('Valor debe ser un array');
//  for(num of arr){
//   if(typeof num !== 'number') return console.error(`El valor "${num}" no es un numero`)
// }
// return console.info({
//  asc : arr.map(el => el).sort(),
//  desc: arr.map(el => el).sort().reverse()
// })
// }
// //Pruebas
// ordenarNumeros();
// ordenarNumeros([]);
// ordenarNumeros([false, 10 , 20]);
// ordenarNumeros(['Hola', 10, 20]);
// ordenarNumeros(true);
// ordenarNumeros([7, 5,7,8,6]);
// ordenarNumeros([100,-452,10,400,4]);

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

// const elementosDuplicados = (arr = undefined) => {

//  if(arr === undefined) return console.warn('No has ingresado un valor a evaluar');
//  if(arr.length === 0) return console.error ('El array no puede estar vacio');
//  if(arr.length === 1) return console.error ('El array debe tener al menos dos elementos');
//  if (!(arr instanceof Array)) return console.error('El valor ingresado debe ser un array')

// return console.info({
//  original: arr,
//  sinDuplicados: [... new Set(arr)]
// })
// }
// Pruebas
// elementosDuplicados();
// elementosDuplicados([]);
// elementosDuplicados(true);
// elementosDuplicados([10]);
// elementosDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

// const obtenerPromedio = (arr = undefined) => {
//  //Validaciones
//  if(arr === undefined) return console.warn('No has ingresado un array a evaluar');
//  if(arr.length === 0) return console.error('Array no puede estar vacio');
//  if(arr.length === 1) return console.error('Array debe tener al menos dos valores');
//  if (!(arr instanceof Array)) return console.error('Valor ingresado debe ser un array')
//  for(num of arr){
//   if(typeof num !== 'number') return console.error(`El valor "${num}" no es un numero`);
//  }

//  //Solucion
//  let max = Math.max(...arr);
//  let min = Math.min(...arr);
//  let resultado = ((max + min) / 2);
//   console.log(resultado)
// }
// //Pruebas
// obtenerPromedio();
// obtenerPromedio([]);
// obtenerPromedio([10]);
// obtenerPromedio(true);
// obtenerPromedio(['Hola', 10, 20]);
// obtenerPromedio([9,8,7,6,5,4,3,2,1,0]);
// obtenerPromedio([500,100,20,487,379]);



// 27) Programa un clase llamada pelicula
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros aceptados.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.


//- Todos los datos del objeto son obligatorios.
// class Peliculas {
 
//  constructor(id,titulo,director,anio,pais,generos,calificacion) {
  
//   this.id = id;
//   this.titulo = titulo;
//   this.director=director;
//   this.anio=anio;
//   this.pais=pais;
//   this.generos=generos;
//   this.calificacion=calificacion;

//   this.validarIMDB(id);
//   this.validarTitulo(titulo);
//   this.validarDirector(director);
//   this.validarAnio(anio);
//   this.validarPais(pais);
//   this.validarGeneros(generos);
//   this.validarCalificacion(calificacion);
//  }
//  // Crea un método estático que devuelva los géneros aceptados*
//  //Atributo obtenedor estatico
//  static get listaGeneros(){
//   return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' , 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
//   }
//  //Metodo estatico
//  static generosAceptados(){
//    return console.info(`Los generos aceptados son: ${Peliculas.listaGeneros.join(', ')}`);
//   }

//  //Validar cadena de texto
//  //Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
//  validarCadena(propiedad, valor){
//   if(!valor) return console.warn(`${propiedad} "${valor}" ingresado, no es una cadena de texto`);
//   if(typeof valor !== 'string') return console.error(`${propiedad} "${valor}" no es una cadena de texto`);

//   return true;
//  }
 
//  //Valida que el año de estreno sea un número entero de 4 dígitos
//  validarNumero(propiedad,valor){
//   if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
//   if(typeof valor !== 'number') return console.error(`${propiedad} "${valor} no es un numero"`);

//   return true
//  }

//  //Valida que los géneros sean introducidos en forma de arreglo
//  //Valida que el país o paises sea introducidos en forma de arreglo
//  validarArreglo(propiedad,valor){
//   if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)
//   if(!(valor instanceof Array)) return console.error('El valor ingresado debe ser un array')
//   if(valor.length === 0) return console.error(`El array no tiene datos`)
//   for(cadena of valor){
//    if(typeof cadena !== 'string') return console.error(`El pais ${cadena} debe ser una cadena de texto`)

//    return true;
//   }
//  }
// //Valida que el título no rebase los 100 caracteres.
// //Valida que el director no rebase los 50 caracteres.
//  validarLongitudAnio(propiedad,valor,longitud){
//   if(valor.length < longitud) return console.error(`${propiedad} "${valor}"Excede el numero de caracteres permitidos (${longitud})`);

//   return true;
//  }

// //Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
//  validarIMDB(id){
//   if(this.validarCadena('IMDB id', id))
//   if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los dos primeros deben ser letras y los7 restantes numeros`);
//  }

//  //Valida que el título no rebase los 100 caracteres.
//  validarTitulo(titulo){
//   if(this.validarCadena('Titulo', titulo))
//   this.validarLongitud('Titulo', titulo, 100);
//  } 
 
//  //Valida que el director no rebase los 50 caracteres.
//  validarDirector(director){
//   if(this.validarCadena('Director', director))
//   this.validarLongitud('Director', director, 50);
//  }

//  //Valida que el año de estreno sea un número entero de 4 dígitos.
//  validarAnio(anio){
//    if(this.validarNumero('Año de estreno', anio));
//    if(!(/^([0-9]){4}$/.test(anio))) return console.error(`Año de estreno "${anio} debe ser un numero de 4 digitos`);
//  }

//  //Valida que el país o paises sea introducidos en forma de arreglo
//  validarPais(pais){
//   this.validarArreglo('Pais', pais); 
//   }

// //Valida que los géneros sean introducidos en forma de arreglo
// //Valida que los géneros introducidos esten dentro de los géneros aceptados.

//  validarGeneros(generos){
//   if (this.validarArreglo('Generos',generos)){ 
//   for(let genero of generos){
//    console.log(genero, Peliculas.listaGeneros.includes(genero));
//    if(!Peliculas.listaGeneros.includes(genero)){
//     console.error(`Genero(s) incorrectos ${generos.join(', ')}`);
//     Peliculas.generosAceptados();
//    }} 
//    return console.info(`El ${genero}`)
//  }
// }
 
// // Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
// validarCalificacion(calificacion){
//  if(this.validarNumero('Calificacion', calificacion))
//  return (calificacion < 0 || calificacion > 10)
//  ? console.error(`La calificacion estar entre 0 y 10`)
//  : this.calificacion = calificacion;
// }

// //Crea un método que devuelva toda la ficha técnica de la película
// fichaTecnica(){
//  console.info(`Ficha tecnica\n Titulo: "${this.titulo}"\n Director: "${this.director}"\n Año: "${this.anio}"\n Pais: "${this.pais,join('-')}"\n Generos: "${this.generos.join(', ')}"\n Calificacion; "${this.calificacion}"\n IMDB id: "${this.id}"`)
// }
// }

//Prueba: validaciones de la clase
// const peli = new Peliculas ({ 
//  id: 'tt1234562578569',
//  titulo: 1958,
//  director: true,
//  estreno: 'Hola',
//  pais: false,
//  generos: ['Dram', 'Humor negro', 'Comedia'],
//  calificacion: 77,
// })
// console.log(peli)


//A partir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

const misPeliculas = [
{
 id: 'tt1234567',
 titulo: 'Into the wild',
 director: 'Chistopher Nolan',
 estreno: 1758,
 pais: ['Argentina', 'Francia'],
 generos: ['Drama', 'Action', 'Comedy'],
 calificacion: 7
},
 {
  id: 'aa7483729',
  titulo: 'Matrix',
  director: 'Keanu Reeves',
  estreno: 1985,
  pais: ['Argentina', 'Francia'],
  generos: ['Comedy', 'Drama', 'Sport'],
  calificacion: 4, 
 },
 {
  id: 'gg3740293',
  titulo: 'El guason',
  director: 'Tarantino',
  estreno: 1990,
  pais: ['Peru', 'Uruguay'],
  generos: ['Family', 'Music', 'Short'],
  calificacion: 9,
 }
]
console.log(misPeliculas);

//  ``
//  \ 
//  =>
//  ^ 
//  <
//  >
//  ||


