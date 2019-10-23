// Sprear Operator ...
// Combina 2 arreglos diferentes

let lenguajes = ["JavaScript", "PHP", "Python"];
let framework = ["ReactJS", "Larabel", "Djando"];

// unir los arrelgos en uno solo

let combinacion = [...lenguajes, ...framework];
let nuevoArreglo = [...lenguajes];
// let combinacion = lenguajes.concat(framework);
console.log(combinacion);
console.log(nuevoArreglo);
