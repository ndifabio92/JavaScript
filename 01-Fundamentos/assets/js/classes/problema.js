
const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`)
    }
}

fher.imprimir();

function Persona( nombre, edad ) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`)
    }
}

const maria = new Persona('Maria', 18)
maria.imprimir()