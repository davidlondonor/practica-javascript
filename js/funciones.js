// Function Declaration
saludar("Judith");
function saludar(nombre) {
  console.log("Bienvenido " + nombre);
}

// Function Expression
const cliente = function(nombreCliente) {
  console.log("Mostrando datos del cliente " + nombreCliente);
};
cliente("Juan");
