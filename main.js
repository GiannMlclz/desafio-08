import './style.css'

/* ------------------------------------------- */
/* ----------JavaScript: Desafio 08----------- */
/* ------------------------------------------- */

console.warn('/*-------------------*/')
console.warn('Desafio N°8: JavaScript')
console.warn('/*-------------------*/')
console.warn('Ejecicio n°1')

let nombre = 'Gianfranco'

let apellido = 'Malacalza'

let edad = 19

let pais = 'Argentina'

let arrayConocimientos = ['HTML', 'CSS']

console.log(nombre)

console.log(apellido)

console.log(edad)

console.log(pais)

console.log(arrayConocimientos)

let conocimientoNuevo = 'JavaScript'

arrayConocimientos.push(conocimientoNuevo)

console.log (arrayConocimientos)



console.warn('/*-------------------*/')
console.warn('Ejercicio n°2')

let marca = ('BMW')

let velocidad = 314

let stock = true

let arrayModelos = ['M4 GTS', '3.0 CSL', 'i8', 'M1', '1M Coupé']

console.log('Nuestra marca es ' + marca + ' con velocidades de hasta ' + velocidad + ' ¿hay stock? ' + stock)

console.log('Nuestros modelos:')

arrayModelos.forEach( function( modelos, indice) {
console.log(modelos +'' + indice)
})





