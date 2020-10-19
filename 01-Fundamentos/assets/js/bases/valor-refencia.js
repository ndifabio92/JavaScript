let a = 10;
let b = 10;
a = 30;

console.log({a,b})

let juan = { nombre: 'Juan' };
let ana = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana })

const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({peter,tony})

// Arreglos
const frutas = ['Manzana','Pera','Pi;a'];
frutas.push('aaa');

console.time('slice')
const otrasFrutas = frutas.slice();
console.timeEnd('slice')

console.time('spread')
const otrasFruta2s = [...frutas];
console.timeEnd('spread')

otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas})