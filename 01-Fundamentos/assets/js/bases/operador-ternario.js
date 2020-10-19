const dia = 1; // 0: domingo, 1:lunes.....
const horaActual = 10;

let horaApertura;
let mensaje;

horaApertura = ([0,6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Esta Abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`

console.log({horaApertura,mensaje})