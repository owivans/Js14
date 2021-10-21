console.log(document)

const h1 = document.createElement("h1");
const text = document.createTextNode("Hola Koders");

h1.appendChild(text)

document.body.appendChild(h1);

console.log(h1)

const personas = [
  'quienes somos?',
  'contacto',
  'login',
];

// iterar el arreglo
const ul = document.createElement('ul');
personas.forEach((persona) => {
  const li = document.createElement('li');
  const text = document.createTextNode(persona);
  li.appendChild(text);
  ul.appendChild(li)
});

document.body.appendChild(ul);



// Crear tabla con el sigueinte arreglo

const mentorsArray = [
  {
      name:"Ivan Diaz",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:8
          },
          {
              signature:"ReactJS",
              score:8
          }
      ]
  },
  {
      name:"Alan Medina",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:7
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  },
  {
      name:"Elvira Camarillo",
      scores:[
          {
              signature:"HTML",
              score:9
          },
          {
              signature:"CSS",
              score:9
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:9
          }
      ]
  },
  {
      name:"Alejandra Paez",
      scores:[
          {
              signature:"HTML",
              score:10
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:10
          },
      ]
  },
]
