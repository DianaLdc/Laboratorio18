fetch("https://jsonplaceholder.typicode.com/users/10")
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log("Usuario con ID 10:");
        console.log(datos);
    })
    .catch(error => console.error("Error:", error));

