// Declaramos un arreglo con varios tipos de frutas
const frutas = ["manzana", "banana", "pera", "manzana", "naranja", "banana", "pera", "manzana", "mango", "pera"];

// Objeto para almacenar la cantidad de cada tipo de fruta
const conteoFrutas = {};

// Usando un ciclo for para contar las frutas
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}

console.log("Conteo usando for:", conteoFrutas);

// Reiniciamos el objeto para usar el ciclo while
const conteoFrutasWhile = {};
let index = 0;

while (index < frutas.length) {
    let fruta = frutas[index];
    if (conteoFrutasWhile[fruta]) {
        conteoFrutasWhile[fruta]++;
    } else {
        conteoFrutasWhile[fruta] = 1;
    }
    index++;
}

console.log("Conteo usando while:", conteoFrutasWhile);
