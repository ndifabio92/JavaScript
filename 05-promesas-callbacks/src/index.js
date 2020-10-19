// import { promesaLenta, promesaMedia, promesaRapida, buscarHeroeAsync, buscarHeroe} from './js/promesas';
import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroesIfAwait } from './js/await';

// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );

// Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
//     .then( mensaje => {
//         console.log( mensaje );
//     })

// buscarHeroe('capi2')
//     .then( heroe => console.log( heroe ) )
//     .catch( console.error );

// buscarHeroeAsync('iron2')
//     .then( heroe => console.log( heroe ) )
//     .catch( console.warn );

// obtenerHeroesArr().then( console.log );
// console.log( heroes );

// obtenerHeroeAwait('capi').then( console.log );
heroesCiclo();
heroesIfAwait('iron');
