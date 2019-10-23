// Objetos

// Object Literal

const persona = {
  nombre: "Andrés",
  profesion: "Frontend Developer",
  edad: 500
};

let nombrePersona = "David";
let profesion = "Frontend Developer";

console.log(nombrePersona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);
console.log(persona["edad"]);

// Object Constructor
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

//Crear una nueva tarea
const tarea1 = new Tarea("Aprender JavaScript", "Sin mente");
console.log(tarea1);
console.log(tarea1.nombre);
console.log(tarea1.urgencia);
