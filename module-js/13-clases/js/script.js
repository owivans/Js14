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


function Persona (name, lastName) {
  this.name = name;
  this.lastName = lastName;
};

// const otra = () => {
//   console.log(this);
// };

// console.log(otra())

// const person1 = new Persona('ivan', 'diaz')

const person2 = new Persona('German', 'Martinez')

Persona.prototype.saludar = function () {
  console.log(`hola soy ${this.name}`)
};
// console.log(person1)
console.log(person2)


{
  name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
},
{
  name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
},
{
  name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
},
{
  name: "Jon", age: 22, vaccinated: true, gender: "hombre"
},
{
  name: "Brian", age: 20, vaccinated: false, gender: "hombre"
},
{
  name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
},
{
  name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
},
{
  name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
},
{
  name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
},
{
  name: "Harold", age: 45, vaccinated: true, gender: "hombre"
},
{
  name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
},
{
  name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
},
{
  name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
},
{
  name: "Lila", age: 18, vaccinated: true, gender: "mujer"
},
{
  name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
},

const koders = [
  {
    name: 'Harold', 
    lastName: 'López',
    birthday: '1996/06/24',
    generation: 9,
    bootcamp: 'JavaScript',
    scores: [
        {
            module: 'Frontend',
            score: 90
        },
        {
            module: 'Backend',
            score: 80
        },
        {
            module: 'Cloud',
            score: 80
        },
    ]
  },

  {
            name: 'Arnold', 
            lastName: 'Osborn',
            birthday: '1998/05/12',
            generation: 1,
            bootcamp: 'Python',
            scores: [
                {
                    module: 'Frontend',
                    score: 90
                },
                {
                    module: 'Backend',
                    score: 100
                },
                {
                    module: 'Cloud',
                    score: 100
                },
            ]
        },
        {
                  name: 'Peter', 
                  lastName: 'Parker',
                  birthday: '1994/10/26',
                  generation: 10,
                  bootcamp: 'JavaScript',
                  scores: [
                      {
                          module: 'Frontend',
                          score: 100
                      },
                      {
                          module: 'Backend',
                          score: 95
                      },
                      {
                          module: 'Cloud',
                          score: 80
                      },
                  ]
              },
              {
                        name: 'Homer', 
                        lastName: 'Simpson',
                        birthday: '1996/06/24',
                        generation: 1,
                        bootcamp: 'Python',
                        scores: [
                            {
                                module: 'Frontend',
                                score: 98
                            },
                            {
                                module: 'Backend',
                                score: 100
                            },
                            {
                                module: 'Cloud',
                                score: 70
                            },
                        ]
                    },
];


  