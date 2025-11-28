document.getElementById("btnCargar").addEventListener("click", cargarUsuario);

async function cargarUsuario() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const usuario = await respuesta.json();

        const resultado = document.getElementById("resultado");

        resultado.innerHTML = `
            <strong>Nombre:</strong> ${usuario.name} <br>
            <strong>Email:</strong> ${usuario.email} <br>
            <strong>Ciudad:</strong> ${usuario.address.city}
        `;

    } catch (error) {
        console.error("Error:", error);
    }
}
