/*
TIPOS DE DATOS DE JAVASCRIPT
*/

// Tipo: Number (Número)
var edad = 42
var precio = 100.50
var puntos = 0
var temperatura = -19
var numeroNegativo = -666

// Tipo: String (Texto)
var nombre = "Valery" // Con comillas dobles
var saludo = 'Hola, ¿Como estas?' // Con comillas simples
var character = "a"
var edadCadena = "25"
var numeroEscrito = 'Veinticinco'
var comillaDoble = '"'
var falsoEscrito = "FALSE"

// Tipo: Boolean (Booleano)
var esMayor = true // Verdadero
var tienePermiso = false // Falso

// Tipo: Symbol (Identificador único)
var identificador1 = Symbol("id")
var identificador2 = Symbol("id")

// Tipo: BigInt (Números muy grandes)
var numeroGrande = 7373568734587236534658n //Notar la "n" al final

/*
NULL, UNDEFINED y NaN en Javascript
*/

// Tipo: Null (Valor vacío INTENCIONALMENTE)
var vacio = null

// Tipo: Undefined (Valor NO asignado)
var sinDefinir

// Tipo Nan (Not a Number - Un no Número , esto pasa cuando una operación no es un número válido)
var resultadoInvalido = "Hola" * 10

/*
¿Qué es console.log?
console.log se usa para mostrar valores en la consola del navegador.
Es útil para depurar y entender como funcionan las variables en el código.
*/

console.log(edad)
console.log(nombre)

/*
¿Qué es typeof?
typeof nos permite conocer el tipo de dato de una variable.
Es útil para depuración y validaciones de código.
*/

console.log(typeof edad)
console.log(typeof edadCadena)
console.log(typeof 42)
console.log(typeof 'Veinticinco')
console.log(typeof -666)
console.log(true)
console.log(typeof 0)
console.log('"')
console.log(null)
console.log(undefined)
console.log("FALSE")