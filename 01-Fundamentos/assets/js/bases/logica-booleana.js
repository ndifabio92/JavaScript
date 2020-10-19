const returnTrue = () => {
    console.log('regresa true')
    return true;
}

const returnFalse = () => {
    console.log('regresa false')
    return false;
}

console.warn('Not o la negracion')
console.log(true)
console.log(!true)
console.log(!false)

console.log(!returnFalse())
console.warn('And');
console.log( true && true)
console.log( true && !false)

console.warn('OR')
console.log(true || false)
console.log(false || false)

console.log( returnTrue() || returnFalse())

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && true && 'Hola Mundo';
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || soyUndefined || soyNull || 'Ya no soy Falso';

console.log({a1, a2, a3})