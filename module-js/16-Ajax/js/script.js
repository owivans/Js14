const ul = document.createElement('ul');
document.body.appendChild(ul);
const renderUsers = (users) => {
    users.forEach((user) => {
        showUser(user);
    });
};

const showUser = (user) => {
    const li = document.createElement('li');
    li.textContent = user.name;
    ul.appendChild(li);
    //Crear elementos en el dom : nombre
};


const getUsers = () => {
    // instanciamos la clase
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    console.log(xhr.readyState)
      if(xhr.readyState === 4 && xhr.status === 200) {
        //   JSON.parse()   este metodo te convierte de JSON > tipo de dato primitivo
        //   JSON.stringify()   este metodo te convierte de tipo de dato primitivo > JSON 
        console.log(xhr)
        const response = JSON.parse(xhr.responseText);
        renderUsers(response);
      }else {
          console.log('Hubo un error')
      }
    console.log(xhr);
  });
// Declaramos el endpoints
  const URL = "https://js-14va-default-rtdb.firebaseio.com/ivan/.json";
  console.log(xhr);

  xhr.open("GET", URL, true);
  xhr.send()
};


const postUsers = (name, lastName ) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        console.log(xhr.readyState)
        if(xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr)
        }

    });

    const URL = "https://js-14va-default-rtdb.firebaseio.com/tunombre/.json";
    console.log(xhr);

    xhr.open("POST", URL, true);
    xhr.send(JSON.stringify({ name, lastName }));
};
