// Arreglos y .map

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

carrito.map(producto => {
  return "El producto es " + producto;
});

// const appContenedor = document.querySelector("#app");
// let html = "";
// carrito.forEach(producto => {
//     html += `<li>${producto}</li>`
// });
// appContenedor.innerHTML = html

const persona = {
  nombre: "David",
  profesion: "Frontend Developer",
  edad: 500
};

// const { nombre } = persona;
console.log(Object.keys(persona));
