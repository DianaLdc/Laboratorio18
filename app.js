document.getElementById("btnCargar").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(res => res.json())
        .then(usuario => {
            const resultado = document.getElementById("resultado");

            resultado.innerHTML = `
                <strong>Nombre:</strong> ${usuario.name} <br>
                <strong>Email:</strong> ${usuario.email} <br>
                <strong>Ciudad:</strong> ${usuario.address.city}
            `;
        })
        .catch(error => console.error("Error:", error));

});
