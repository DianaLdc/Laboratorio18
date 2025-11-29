import multiplicar from "./multiplicacionDivision.js";
import { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

console.log("Resultados de las operaciones:");

console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
console.log("Multiplicación:", multiplicar(10, 5));

try {
    console.log("División:", dividir(10, 0));  
} catch (error) {
    console.error("Error en división:", error.message);
}
