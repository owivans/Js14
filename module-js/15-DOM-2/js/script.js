// --------------------
const getKoders = () => {
  const xhr = new XMLHttpRequest();
  const URL = "https://js-14va-default-rtdb.firebaseio.com/marco/.json";

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);

      createRow(users);
    } else {
      console.log("hubo un error");
    }
  });
  xhr.open("GET", URL, true);
  console.log(xhr);
  xhr.send();
};

const postKoder = () => {
  const xhr = new XMLHttpRequest();
  const URL = "https://js-14va-default-rtdb.firebaseio.com/.json";
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      }
    } else {
      console.log(xhr.readyState);
    }
  });
  xhr.open("POST", URL, true);
  xhr.send(JSON.stringify({ name: "ivan", lastName: "diaz" }));
};

const deleleUser = userId => {
  const xhr = new XMLHttpRequest();
  const URL = `https://js-14va-default-rtdb.firebaseio.com/marco/${userId}/.json`;
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      }
    } else {
      console.log(xhr.readyState);
    }
  });
  xhr.open("DELETE", URL, true);
  xhr.send();
};

const button = document.getElementById("savePerson");
const inputs = document.querySelectorAll("input");
const tBody = document.getElementById("list");

const createPerson = () => {
  const person = {
    name: "",
    lastName: ""
  };
  inputs.forEach(input => {
    person[input.name] = input.value;
  });
  personList.push(person);
};

const createRow = userList => {
    const newPersonas = [];
    while (tBody.lastElementChild) {
        tBody.removeChild(tBody.lastElementChild);
    }

    for (let key in userList) {
        const object = {
        id: key,
        ...userList[key]
        };
        newPersonas.push(object);
    }

  console.log(newPersonas);
  newPersonas.forEach((person, index) => {
    console.log(person);
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const lastName = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.setAttribute("data-person", person.id);

    name.textContent = person.name;
    lastName.textContent = person.lastName;
    removeButton.textContent = "Delete";
    row.appendChild(name);
    row.appendChild(lastName);
    row.appendChild(removeButton);
    tBody.appendChild(row);

    removeButton.addEventListener("click", event => {
      console.log(event);
      removeButton.closest("tr").remove();
      const personId = event.target.dataset.person;
      deleleUser(personId);
    });
  });
};

button.addEventListener("click", e => {
  console.log(e);
  createPerson();
  createRow();
  console.log(inputs, "inputs");
});

createRow();
getKoders();
