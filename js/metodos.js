// métodos o funciones en un objetos

const persona = {
  nombre: "David",
  trabajo: "Frontend",
  edad: 500,
  musicaRock: true,
  mostrarInformacion: function() {
    console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
  }
};

persona.mostrarInformacion();
