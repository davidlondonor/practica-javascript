// Metodos en Arreglos

const personas = [
  {
    nombre: "David",
    edad: 35,
    aprendiendo: "JavaScript"
  },
  {
    nombre: "Judith",
    edad: 17,
    aprendiendo: "Whatsapp"
  },
  {
    nombre: "Josefina",
    edad: 88,
    aprendiendo: "XD"
  },
  {
    nombre: "Ana",
    edad: 43,
    aprendiendo: "Excel"
  },
  {
    nombre: "Manuela",
    edad: 19,
    aprendiendo: "Coser"
  }
];

console.log(personas);

// mayores de 28 años
const mayores = personas.filter(persona => {
  return persona.edad > 28;
});
console.log(mayores);
