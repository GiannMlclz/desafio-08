# Desafio N° 08: JavaScript

## Ejercicio n°1

1. Debes crear las variables nombre, apellido, edad, pais y conocimientos, esta última deberá ser un array.
- Mostrar todos los valores de las variables por la consola. Los elementos del array mostrarlos en forma manual.
- Después cambia el valor de edad y añade un nuevo element al array.
- Muestra esos nuevos valores por la consola.

```sh
Usamos console.log() Para mostrar mensajes en la consola
Usamos console.warn() Para mostrar mensajes en la consola de color amarillo

Let para crear variables.

let nombre = 'Gianfranco'

let apellido = 'Malacalza'

let edad = 19

console.log(nombre)

console.log(apellido)

console.log(edad)
```

## Ejercicio n°2

2. Debes crear las variables marca, velocidad, stock y modelos (array)
- Todas esas variables deberán ser mostradas por pantalla (con una frase) [Usar template strings]
- Debes mostrar cada uno de los elementos del array (sin hacerlo manualmente)

de esta manera se muestran los elementos del array de una manera no manual
```sh
let arrayModelos = ['M4 GTS', '3.0 CSL', 'i8', 'M1', '1M Coupé']

arrayModelos.forEach( function( modelos, indice) {
console.log(modelos +'' + indice)
})
```