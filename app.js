 async function obtenerUsuario10() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const datos = await respuesta.json();

        console.log("Usuario con ID 10 (async/await):");
        console.log(datos);

    } catch (error) {
        console.error("Error:", error);
    }
}

obtenerUsuario10();
