class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor( nombre = '' ) {
        
        if( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        return this;
    }


}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('IronMan2');
const instancia3 = new Singleton('IronMan3');

console.log(instancia1.nombre)
console.log(instancia2.nombre)
console.log(instancia3.nombre)