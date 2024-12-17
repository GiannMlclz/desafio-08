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

## Ejercicio n°3

3. Un coche va a toda velocidad por la carretera. Va a una velocidad de 135km/h y el limite es de 60km/h
- Comprueba que si la velocidad es mayor al limite.
- Si es mayor debes mostrar un mensaje por la consola indicando que baje la velocidad.
- Si es menor el mensaje deberá ser que todo va bien.

Uso el atributo if y else
```sh
let tuVelocidad = 135

let velocidadLimite = 60

if(tuVelocidad > velocidadLimite){
    console.log('Por favor, reduzca su velocidad!');
} else {
    console.log('Está en una velocidad admitida')
}
```

## Ejercicio n°4

4. Dado un sueldo, crear una condicional comparando su sueldo.
- Si el sueldo es $100.000 es excelente
- Si el sueldo es menor o igual a $80.000 es muy bueno.
- Si el sueldo es menor o igual a $60.000 es bueno.
- Y si el sueldo es menor o igual a $40.000 es bajo.

aca use el prompt y el if.
<!-- Aca inicialmente arranque de mayor a menor pero no funcionaba, probe hacerlo al revés y me funciono -->
```sh
let sueldo = prompt('Indique su sueldo:')

if (sueldo <= 40000){
    console.log('Su sueldo es bajo')
}else if (sueldo <= 60000){
    console.log('Su sueldo es bueno');
}else if (sueldo <= 80000){
    console.log('su sueldo es muy bueno');    
}else if (sueldo = 100000){
    console.log('Su sueldo es excelente');
}
```

## Ejercicio n°5


5. Pidele al usuario su año de Nacimiento (ej: 1990) en una ventana emergente (prompt) y calcula cuántos años tiene actualmente.

* En este ejercicio hacemos la diferencia del año actual con el año de nacimiento ingresado en el mensaje prompt, y que eso tire la edad actual

## Ejercicio n°6

6. Crear una función en JavaScript que reciba como parámetro un número entero. Calcule y muestre en la consola la tabla de multiplicar de ese número desde 1 hasta 10.

-- como ser vería en consola -> calcularTabla(2) -> Se utiliza un for
 2 x 1 = 2
 2 x 2 = 4
 2 x 3 = 6
 2 x 4 = 8

 ```sh
FOR: Aca utilizamos la sentencia for

for (let i = 1; i < 11; i++) {  
}

consta de 3 partes:
Primera pongo la inicializacion.
Segunda pongo el numero que quiero en que se corte la repetición del bucle.
Tercera indico cuantas veces quiero que se incremente.

y aca usamos la funcion de multiplicar y luego consolear el resultado

let multiplicar = numero * i
console.log (`${numero} x ${i} = ${multiplicar}`)
```

## Ejercicio n°7

7. Crea una función que devuelva si un número (pasado por el usuario es par o impar)
Muestra el resultado por consola y un alert.

```sh
* En este ejercicio utilizamos un if else.

* Usamos el resto para que al numero que coloquemos nos de par o impar

let numeroParOImpar = prompt('Introduzca un número:')

if (numeroParOImpar % 2 === 0) {

} else

* Un alert para que nos aparezca en pantalla y un console.log para que nos aparezca en la consola
```
