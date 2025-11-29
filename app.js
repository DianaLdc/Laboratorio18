const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;

console.log(regexFecha.test("12/05/2024"));  
console.log(regexFecha.test("5/5/2024"));   
console.log(regexFecha.test("12-05-2024")); 
