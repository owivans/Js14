// const person = {
//   name:'ivan',
//   paellisdo:'',
//   saludar: function (params) {

//   }
// };

// console.log(person.saludar())

// const number = [1,2,3]
// number[1]

// console.log(number)

// const test = new String('este es un string')
// console.log(test)

// function Persona(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
// }

// const otra = () => {
//   console.log(this);
// };

// console.log(otra())

// function Persona(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
// }

// const person1 = new Persona('ivan', 'diaz')

// const person2 = new Persona("German", "Martinez");

// Persona.prototype.saludar = function() {
//   console.log(`hola soy ${this.name}`);
// };
// console.log(person1)
// console.log([person1, person2]);



// const koders = [
//   {
//     name: "Harold",
//     lastName: "López",
//     birthday: "1996/06/24",
//     generation: 9,
//     bootcamp: "JavaScript",
//     scores: [
//       {
//         module: "Frontend",
//         score: 90
//       },
//       {
//         module: "Backend",
//         score: 80
//       },
//       {
//         module: "Cloud",
//         score: 80
//       }
//     ]
//   },

//   {
//     name: "Arnold",
//     lastName: "Osborn",
//     birthday: "1998/05/12",
//     generation: 1,
//     bootcamp: "Python",
//     scores: [
//       {
//         module: "Frontend",
//         score: 90
//       },
//       {
//         module: "Backend",
//         score: 100
//       },
//       {
//         module: "Cloud",
//         score: 100
//       }
//     ]
//   },
//   {
//     name: "Peter",
//     lastName: "Parker",
//     birthday: "1994/10/26",
//     generation: 10,
//     bootcamp: "JavaScript",
//     scores: [
//       {
//         module: "Frontend",
//         score: 100
//       },
//       {
//         module: "Backend",
//         score: 95
//       },
//       {
//         module: "Cloud",
//         score: 80
//       }
//     ]
//   },
//   {
//     name: "Homer",
//     lastName: "Simpson",
//     birthday: "1996/06/24",
//     generation: 1,
//     bootcamp: "Python",
//     scores: [
//       {
//         module: "Frontend",
//         score: 98
//       },
//       {
//         module: "Backend",
//         score: 100
//       },
//       {
//         module: "Cloud",
//         score: 70
//       }
//     ]
//   },
//   {
//     name: "Ren",
//     lastName: "López",
//     birthday: "1996/06/24",
//     generation: 9,
//     bootcamp: "JavaScript",
//     scores: [
//       {
//         module: "Frontend",
//         score: 80
//       },
//       {
//         module: "Backend",
//         score: 90
//       },
//       {
//         module: "Cloud",
//         score: 100
//       }
//     ]
//   }
// ];
// console.log(koders)

/*
Ejercicio en clase:
Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:

Prototipo de tipo koder

Obtener la edad a partir de la fecha de nacimiento

Obtener promedio de sus scores

---
Colección de Koder que pertenezcan a JavaScript

Colección de Koder que pertenezcan a Python

{
  kavascrip: [
    koder1
  ],
  python: [
    
  ]

}
*/

// iterar el arreglo con map
// generar nuesta funcion constructura
// por cada elemento vamos a crear un objeto tipo koder
// retornar nuestro nuevo objeto tipo koders




// class Koder {
//   constructor({ name, lastName, bootcamp, average }) {
//     this.name = name;
//     this.lastName = lastName;
//     this.bootcamp = bootcamp;
//     this.promedio = average;
//   }
// }


// const getAverage = (signatures) => {
//     const average = signatures.reduce((accum, currentValue) => {
//       return accum + currentValue.score / signatures.length;
//     }, 0);
//     return average;
// };


// function factoryKoder(kodersArray) {
//     const newKoders = kodersArray.map((koder)=> {
//       const average = getAverage(koder.scores);
//       const koderType = new Koder({
//          name: koder.name, 
//          lastName:koder.lastName, 
//          bootcamp: koder.bootcamp, 
//          average
//         });
//       return koderType
//     });
//     return newKoders;
// };

// console.log(factoryKoder(koders))



// function Persona(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
// }
// const person1 = new Persona('ivan', 'diaz')

// Persona.prototype.saludar = function() {
//   console.log(`hola soy ${this.name}`);
// };

// function calculate(age) {
//   return age + 10;
// }

// class Persona {
//     constructor(name, lastName){
//       this.name = name;
//       this.lastName = lastName;
//     }

//     saludar (amigo) {
//       console.log(`hola amigo ${amigo}`)
//     }
// }


// function Persona(name, lastName, age) {

//   this.name = name;
//   this.lastName = lastName;
//   this.edad = calculate(age)
//   this.saludar = function() {
//     console.log('asdasd')
//   }
// }


// const persona1 = new Persona('freddy', 'Krueger', 'jason vorhees');

// persona1.saludar('jason vorhees')


class Persona {
  constructor ({ name, lastName }) {
    console.log(name, lastName)
    this.name = name;
    this.lastName = lastName;
  }
  saludar() {
    console.log(`Hola soy la persona ${this.name}`)
  }
}

class Koder extends Persona {
  constructor(name, lastName, bootcamp, generation){
    // llamar al constructor de la clase padre
    super(name, lastName)
    this.bootcamp = bootcamp;
    this.generation = generation;
  }

  static saludar(){
    console.log(`Hola soy el koder ${this.name}`)
  }
}

const koder1 = new Koder({name:'ivan', lastName:'diaz'}, 'javascript', 14);

koder1.saludar()


console.log(Math.floor(3.6))

// Math.floor(3.6)