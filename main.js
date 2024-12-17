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

console.warn('/*-------------------*/')
console.warn('Ejercicio n°3')

let tuVelocidad = 135

let velocidadLimite = 60

if(tuVelocidad > velocidadLimite){
    console.log('Por favor, reduzca su velocidad!');
} else {
    console.log('Está en una velocidad admitida')
}

console.warn('/*-------------------*/')
console.warn('Ejercicio n°4')

let sueldo = prompt('Indique su sueldo:')

if (sueldo <= 40000){
    console.log('Su sueldo es bajo');
}else if (sueldo <= 60000){
    console.log('Su sueldo es bueno');
}else if (sueldo <= 80000){
    console.log('su sueldo es muy bueno');    
}else{
    console.log('Su sueldo es excelente')
}




console.warn('/*-------------------*/')
console.warn('Ejercicio n°5')

let suAñoDeNacimiento = prompt('Indique su año de nacimiento:')
let añoActual = 2024

let suEdad = añoActual - suAñoDeNacimiento

if (suAñoDeNacimiento < añoActual) {
    console.log(`esta es su edad actual: ${suEdad}`)
}

console.warn('/*-------------------*/')
console.warn('Ejercicio n°6')

let numero = prompt('Indique la tabla de que numero desea saber: ')

console.log(`Tabla del: ${numero}`)

// En esta parte tuve una complicación por que me decia que el atributo (i) no estaba definido, mi error era que lo estaba poniendo afuera del (for)

for (let i = 1; i < 11; i++) {   
    let multiplicar = numero * i
    /* debugger */
    console.log (`${numero} x ${i} = ${multiplicar}`)
}

console.warn('/*-------------------*/')
console.warn('Ejercicio n°7')

let numeroParOImpar = prompt('Introduzca un número:')

if (numeroParOImpar % 2 === 0) {
    console.log('El número es par')
    alert('El número es par')
} else{
    console.log('El número es impar')
    alert('el número es impar')
}







