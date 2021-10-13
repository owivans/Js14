/* usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )

-Obtener el promedio individual de cada mentor

-Obtener la lista de mentores cuyo promedio sea mayor a 9.5 
-crear un array de strings con la siguiente forma:
    "Mi nombre es {nombre} y mi promedio es de {promedio}"
    
-el resultado sera un arreglo con los mentroes que cumplan la condicion
iterar el arreglo de los mentores

sacar el promedio de los mentores 
por cada mentor vamos aobtener el promedio
eevaluar el promedio del mentor y si es mayor a 9.5 a un arreglo 
mistrar el arreglo 




-crear un array de strings con la siguiente forma:
    "Mi nombre es {nombre} y mi promedio es de {promedio}"
*/

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
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:9
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  },
  {
    name:"Alejandra Paez",
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
            score:9
        },
        {
            signature:"ReactJS",
            score:10
        }
    ]
}
]



// -Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )

const getCoverageBySignature = (mentorsArray) => {
    let htmlCoverage = 0;
    let cssCoverage = 0;
    let jsCoverage = 0;
    let reactCoverage = 0;
  
    mentorsArray.forEach((mentor) => {
      mentor.scores.forEach((score) => {
        switch(score.signature) {
          case 'HTML':
            htmlCoverage += score.score / mentor.scores.length
          break;
          case 'CSS':
            cssCoverage += score.score / mentor.scores.length
          break;
          case 'JS':
            jsCoverage += score.score / mentor.scores.length
          break;
          case 'ReactJS':
            reactCoverage += score.score / mentor.scores.length
          break;
        }
      })
    });
  
    return {
      htmlCoverage,
      cssCoverage,
      jsCoverage,
      reactCoverage,
    }
  };
  
  // ---------------------------------------------
  
  //-Obtener el promedio individual de cada mentor
  
  // console.log(getCoverageBySignature(mentorsArray))
  
  const getCoverageByMentor = (mentorsArray) => {
    const mentorsCoverage = [];
    mentorsArray.forEach(( mentor ) => {
      let coverage = 0;
      mentor.scores.forEach(( score ) => {
        coverage += score.score;
      });
      coverage = coverage / mentor.scores.length;
      mentorsCoverage.push({ name: mentor.name, coverage})
    });
    return mentorsCoverage;
  };
  //console.log(getCoverageByMentor(mentorsArray))
  
  
  
  
  
  // ---------------------------------------------
  // -Obtener la lista de mentores cuyo promedio sea mayor a 9.5 
  
  const mentorsByCoverage = getCoverageByMentor(mentorsArray);
  
  const getMayorCoverage = (mentors) => {
    const results = [];
    mentors.forEach(( mentor ) => {
      if(mentor.coverage > 9.5) {
        results.push(mentor)
      }
    });
    return results;
  };
  // console.log(getMayorCoverage(mentorsByCoverage))
  
  
  
  
  // ---------------------------------------------
  // -crear un array de strings con la siguiente forma:
  //"Mi nombre es {nombre} y mi promedio es de {promedio}"
  
  const showMentorCoverage = (mentors) => {
    const result = [];
    mentors.forEach(( mentor ) => {
      result.push(`Mi nombre es ${mentor.name} y mi promedio es de ${mentor.coverage}`)
    });
    return result;
  };
  
  console.log(showMentorCoverage(mentorsByCoverage))
  