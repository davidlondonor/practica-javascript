// Object Literal enhancement

const banda = "Metallica";
const genero = "Soft Rock";
const canciones = ["Yellow", "Parachutes", "Otra canción"];

//forma anterior
// const coldplay = {
//   banda: banda,
//   genero: genero,
//   canciones: canciones
// };

//forma nueva
const metallica = { banda, genero, canciones };

console.log(metallica);
