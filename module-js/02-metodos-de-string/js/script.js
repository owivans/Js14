/*---------Tarea----------
Casa de cambio
Crear una funcion que obtenga  una cantidad de  dinero a traves de prompt(), 
tambien debe  pedirle el nombre de un pais , investigar su moneda y el tipo de
 cambio para hacer la conversion de  la cantidad capturada. ejemplo
1-¿Que cantidad en MXN deseas convertir ?
R= 1500 MXN
2¿A que pais vas a viajar?
R= USA
salida de la funcion: '$1500MXN (moneda local elegida por el koder) equivale
 a $750USD(moneda del pais ingresado por el usuario)'
Considerar minimo 4 tipo de monedas */



// La cantidad ha convertir 
// Hay que saber el pais para investigar moneda
// Investigar la moneda del pais y el tipo cambio 
// Hacer la conversion de moneda
// mostrar el resultado con la leyenda

// function calculate(cantidad, tipoDeCambio, tipoMoneda) {
//     const result = Number(cantidad) * tipoDeCambio;

//     console.log(`${cantidad} equivale a ${result}${tipoMoneda}`)
//     return result;
// }


// const USD = 20.42;
// const BRL = 0.26;
// const EUR = 23.72;


// const cantidad = prompt('Que cantidad deseas convertir?');
// const pais = prompt('Selecciona la opcion de pais a donde viajaras \n 1- Estados Unidos \n 2- España \n 3-Brasil ');
//     console.log(pais, 'pais')
// let result;
// switch (Number(pais)) {
//     case 1:
//         result = calculate(cantidad, USD, 'USD');
//         break;
//     case 2:
//         result = calculate(cantidad, EUR, 'EUR');
//         break;
//     case 3:
//         result = calculate(cantidad, EUR, 'EUR');
//         break;
//     default:
//     result = 'ninguno';
//         break;
// };

// console.log(result)

const obj = {
    nombre: 'huesos',
};


let nombre = 'pepe pecas pica papas con un pico';


// let converterNAme= nombre.toLocaleLowerCase();
// let converterNAme= nombre.split(' ');
// let converterNAme= nombre.charAt(1);
// let converterName = nombre.slice(0, 3);
// let converterName = nombre.match(/p/g);
// console.log(nombre.length, 'nombre.length')

// console.log(converterName);


// Ejercicios

/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Ivan"
    input Apellido = "Diaz"
    Output: "ivan DIAZ"
*/


// const converterName = function () {
//     const name = prompt('Cual es tu nombre ?');
//     const lastName =  prompt('Cual es tu apellido');
//     const newName = name.toLowerCase();
//     const newLastName = lastName.toUpperCase();
//     return ` ${newName} ${newLastName}`
// };

// console.log(converterName());


// solicitar el nombre completo de usuario
// buscar el metodo adecuado
// contar resultado del metodo
// mostrar el resultado 

// const frase = 'hola';

// function requestName (texto, textoAbuscar) {
//     const coincidencias = texto.match(/estudiante/g);
//     console.log(coincidencias);
//     const newTexto = texto.replace(/estudiante/g, 'koder')
//     console.log(newTexto)
//     console.log(`Esta palabra contiene ${coincidencias.length} coincidencias`)
// };

// requestName(frase, 'estudiante')



// function calculateLenght (firstWord, secondWord) {
//     if(firstWord.length > secondWord.length) {
//         console.log(firstWord)
//     } else if (firstWord.length < secondWord.length) {
//         console.log(secondWord);
//     } else {
//         console.log('son iguales')
//     }
// }






/*]]]
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

/*
Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/





// const nombres = [
//     { nombre: 'freddy',}, 
//     { nombre: 'michael'} , 
//     { nombre: 'rafa'}
// ];

// const person = {
//     nombre: 'freddy',
//     apellido: 'Krueger',
//     edad: 40,
// };

// console.log(nombres[1])
// console.log(nombres[0])

// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i].nombre)
//     // const element = array[index];
// }

let vuelta = 0;

while(vuelta < 10) {
    console.log(vuelta, 'vuelta')
    if(vuelta % 2 === 0) {
        console.log(`${vuelta} es par`)
    } else {
        console.log(`${vuelta} es impar`)
    }
    // console.log('se cumpli condicion con while')
    vuelta++
}

do {
    console.og
} while (vuelta < 10)

// for ( killer in person ) {
//     console.log(killer)
//     console.log( person[killer] )
// }