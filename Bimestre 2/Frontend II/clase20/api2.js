const url = "https://ctd-todo-api.herokuapp.com/v1/users";

const payload = {
    firstName: "Martin",
    lastName: "Gutierrez",
    email: "martin@martin.com",
    password: "DH2021",
};

const settings = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-type': 'application/json',
    },
}

fetch(url, settings)
    .then((response) => response.json())
    .then((json) => console.log(json));




