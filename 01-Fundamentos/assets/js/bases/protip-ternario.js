const elMayor = (a,b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log(elMayor(20,15))

console.log(tieneMembresia(true))

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')
];
console.log(amigosArr);

const nota = 65; //A+ A B
const grado = nota >= 95 ? 'A+' :
            nota >= 90 ? 'A' :
            nota >= 85 ? 'B+' :
            nota >= 80 ? 'B' :
            nota >= 75 ? 'C+' :
            nota >= 70 ? 'C' : 'F';
console.log({nota,grado});
