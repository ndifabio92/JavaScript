let a = 10;

if ( a >= 10 ) {
    console.log('A es mayor a 10')
} else {
    console.log('A es menor a 10')
}


//console.log('fin de programa')

const currentDate = new Date();
let day = currentDate.getDate()

console.log({day})

if(day === 0) {
    console.log('es domingo')
} else {
    console.log('no es domingo')
}

let dia = 3;
const diasLetras = {
    0: () => 'domingo - 0',
    1: () => 'lunes - 1',
    2: () => 'martes - 2',
    3: () => 'miercoles - 3',
    4: () => 'jueves - 4',
    5: () => 'viernes - 5',
    6: () => 'sabado - 6',
};

console.log(diasLetras[dia]() || 'Dia no Definido')

const diasLetras2 = [
    'domingo - 0',
    'lunes - 1',
    'martes - 2',
    'miercoles - 3',
    'jueves - 4',
    'viernes - 5',
    'sabado - 6',
]
console.log(diasLetras2[dia] || 'Dia no Definido')