// Parametros por defauilt en las funciones

// Funcition Declarations
// function actividad(nombre, actividad) {
//   console.log(`Hola, ${nombre}, está realizando la actividad ${actividad}`);
// }
// actividad("David", "Aprendiendo JavaScript");
// actividad("Judith", "Está feliz");
// activadad();

//Funtion Expressions
const actividad = function(nombre = "Hola", actividad = "Si") {
  console.log(`Hola, ${nombre}, está realizando la actividad ${actividad}`);
};
actividad("David", "Aprendiendo JavaScript");
actividad("Judith", "Está feliz");
activadad();
