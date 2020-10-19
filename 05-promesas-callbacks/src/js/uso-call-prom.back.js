import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId = 'iron';
const heroeId2 = 'capi';

// buscarHeroeCallback( heroeId, ( err, heroe ) => {
//     if( err ) {
//         console.error( err );
//     } else {
//         console.log( heroe );
//     }
// });

// buscarHeroe( heroeId )
//     .then( heroe => {
//         //console.log(`Enviando a ${ heroe.nombre }`)
//         buscarHeroe( heroeId2 )
//             .then( heroe2 => {
//                 console.log(`Enviando a ${ heroe.nombre } y ${ heroe2.nombre } a la mision`);
//             })
//     });

Promise.all([ buscarHeroe( heroeId ), buscarHeroe( heroeId2 ) ])
    .then( ([ heroe, heroe2 ]) => {
        // console.log( 'Promise.all', heroes );
        console.log(`Enviando a ${ heroe.nombre } y ${ heroe2.nombre } a la mision`);
    })
    .catch( err => {
        alert( err );
    })
    .finally( () => {
        console.log('Se termino el promise.all');
    });

console.log('Fin de programa');