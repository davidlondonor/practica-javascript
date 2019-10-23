// Destructuring de Objetos

const aprendiendoJS = {
  version: {
    nueva: "ES6+",
    anterior: "ES5"
  },
  framework: ["React", "VueJS", "AngularJS"]
};
// Destructuring es extraer valor de de objeto

// console.log(aprendiendoJS);

// Version anterior
// let version = aprendiendoJS.version.nueva;
// let framework = aprendiendoJS.framework[1];

// Destructuring de la version nueva
let { nueva } = aprendiendoJS.version;
console.log(nueva);
