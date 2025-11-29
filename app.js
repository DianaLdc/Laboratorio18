const regexURL = /https:\/\/[^\s]+/g;

const texto = "Visita https://unsa.edu.pe o http://google.com o https://github.com";

const urlsSeguras = texto.match(regexURL);

console.log(urlsSeguras);
