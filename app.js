fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json())
    .then(usuarios => {
        console.log("Nombres de los usuarios:");

        usuarios.forEach(usuario => {
            console.log(usuario.name);
        });
    })
    .catch(error => console.error("Error:", error));
