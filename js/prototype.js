// Objetos

function mostrarInformacionTarea(tarea, prioridad) {
  return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
}

// Object Literal
const persona = {
  nombre: "Andrés",
  profesion: "Frontend Developer",
  edad: 500
};
//console.log(persona);
// const mostrarCliente = mostrarInformacionTarea(
//   persona.nombre,
//   persona.profesion
// );
// console.log(mostrarCliente);

// Object Constructor
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

Tarea.prototype.mostrarInformacionTarea = function() {
  return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
};

//Crear una nueva tarea
const tarea1 = new Tarea("Aprender JavaScript", "Urgente");
console.log(tarea1.mostrarInformacionTarea());
