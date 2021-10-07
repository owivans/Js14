
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

// let vuelta = 0;

// while(vuelta < 10) {
//     console.log(vuelta, 'vuelta')
//     if(vuelta % 2 === 0) {
//         console.log(`${vuelta} es par`)
//     } else {
//         console.log(`${vuelta} es impar`)
//     }
//     // console.log('se cumpli condicion con while')
//     vuelta++
// }

// for ( killer in person ) {
//     console.log(killer)
//     console.log( person[killer] )
// }



/*
    Ejercicio 1:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/

// pedir al usuario cierta informacion 
// saber la informacion que pedire
// Hacer el calculo de multiplicar el dato el usario X cada numero de tabla de multiplicar

// const numero = prompt('elige un numero entre el 1 y el 10');

// for (let i = 0; i < 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`)
// }










/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/

/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/


/*
Ejercicio 4:
Imprimir en consola el siguiente patrón

*
**
***
****
*****
******
*******
********
*********
**********

*/



// 💪  Deducir lo que s debe hacer con base en el input y el output

// input: 'a very large string'
// output: 'A VeRy lArGe sTrInG
// input: 'abcdefg'
// output: 'AbCdEfG

// function evaluateCharacter( completeString ){
//     var characterCode = Math.floor( Math.random() * (91 - 48) + 48 )
//     var character = String.fromCharCode( characterCode )
//     return !completeString.includes(character) ? character : evaluateCharacter( completeString )
// }

// function createRandomString ( charactersQty ){
//     var result = ""
//     while( result.length < charactersQty ){
//         result += evaluateCharacter(result)
//     }
//     console.log('result ', result)
//     console.log('length ', result.length )
// }






// const text =  "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";

// function busqueda (texto, palabraAbuscar) {

//     let expresion = new RegExp(`[${palabraAbuscar}]`,'g');
//     console.log(expresion)

//     // console.log(expresion, 'expresion')
//     const result = texto.match(expresion);
//     console.log(result);
// };

// busqueda(text, 'aeiou')



// Solicitar al usuario ingresar un numero
// Crear una funcion que genere un string con caracteres aleatorios, 
// la longitud del string debe ser igual que el numero que ingreso el usuario

// input : 6
// output: '6AQX>H:'


// Preguntar al usuario un numero 
// Crear la funcion 
// Generar un numero aleatorio 
// Covertir el numero aleatorio en un caracter o un String
// Repetir la conversion del dato las veces que indique el usuario
// concatenar cada nuevo caracter
// mostrar en consola el string generado

// const numberFromUser = Number(prompt('Eligue un numero'));

// function createRandomString () {
//     const numberRandom = Math.floor(Math.random() * (90 - 48) + 48);
//     const newString = String.fromCharCode(numberRandom );
//     // console.log(newString)
//     return newString;
// }

// let result = '';
// for (let i = 0; i < numberFromUser; i++) {
//     result += createRandomString()
//     console.log(result)
// }
// createRandomString()

// String.fromCharCode(numberRandom, num ,numq )


// input: 'a very large string'
// output: 'A VeRy lArGe sTrInG'

// input: 'abcdefg'
// output: 'AbCdEfG

// -pedir el string al usuario
// recorrer el la cadena


// function eventToUpperCase () {
//     let input = prompt('ingresa palabras');
//     let output = '';

//     for (let i = 0; i < input.length; i++) {
//         if ( i % 2 == 0) {
//             output += input.charAt(i).toUpperCase();
//         } else {
//             output += input.charAt(i).toLowerCase();
//         } 
        
//     }
//     console.log(output)
// };

function eventToUpperCase () {
    let input = prompt('ingresa palabras');

    const newInput = input.split('');
    let output = '';

    for (let i = 0; i < newInput.length; i++) {
        if ( i % 2 == 0) {
            output += input.charAt(i).toUpperCase();
        } else {
            output += input.charAt(i).toLowerCase();
        } 
        
    }
    console.log(output)
};

eventToUpperCase();






