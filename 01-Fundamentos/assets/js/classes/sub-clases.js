class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( 'Hola a todos, soy un metodo statico' )
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`)
    }

    miFrase() {
        console.log(`${ this.codigo } dice: ${ this.frase }`)
    }

}

class Heroe extends Persona {
    clan = 'sin clan';

    constructor( nombre, codigo, frase ) {
        super( nombre, codigo, frase );
        this.clan = 'Los Avengers'
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre }, ${ this.clan }`);
        super.quienSoy();
    }
}

// const spiderman = new Persona( 'Peter Parker', 'SpiderMan', 'Soy tu amigable vecino Spiderman' );
const spiderman = new Heroe('Peter Parker', 'SpiderMan', 'Soy tu amigable vecino Spiderman');
console.log( spiderman )
spiderman.quienSoy();