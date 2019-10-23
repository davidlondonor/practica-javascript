const nombre = "David";
const trabajo = "Desarrollador Web";

// console.log("nombre: " + nombre + ", Trabajo: " + trabajo);
// console.log(`nombre: ${nombre}, Trabajo: ${trabajo}`);

const contenedorApp = document.querySelector("#app");
// let html =
//   "<ul>" +
//   "<li> Nombre; " +
//   nombre +
//   "</li>" +
//   "<li> Trabajo; " +
//   trabajo +
//   "</li>" +
//   "</ul>";

let html = `
<ul>
    <li> Nombre: ${nombre}</li>
    <li> Trabajo: ${trabajo}</li>
<ul>
`;

contenedorApp.innerHTML = html;
