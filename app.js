 async function mostrarNombres() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await respuesta.json();

        console.log("Nombres de los usuarios (async/await):");

        usuarios.forEach(usuario => {
            console.log(usuario.name);
        });

    } catch (error) {
        console.error("Error:", error);
    }
}

mostrarNombres();
