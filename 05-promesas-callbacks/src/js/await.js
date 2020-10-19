import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi','iron','spider'];
const heroesPromesas = heroesIds.map( id => buscarHeroe( id ) );

// export const obtenerHeroesArr = async () => {
//     const heroesArr = [];

//     // for( const id of heroesIds ) {
//     //     const heroe = await buscarHeroeAsync( id );
//     //     heroesArr.push( heroe );
//     // }
//     for( const id of heroesIds ) {
//         heroesArr.push( buscarHeroeAsync( id ) );
//     }

//     return await heroesArr;
// }

// export const obtenerHeroesArr = async () => {
//     return await Promise.all( heroesIds.map( buscarHeroe ) );
// }

export const obtenerHeroeAwait = async ( id ) => {

    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;    

    } catch (error) {
        //console.error( error );
        return {
            nombre: 'Sin Nombre',
            poder: 'Sin Poder',
        };
    }
    
}

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');

    for await ( const heroe of heroesPromesas ) {
        console.log( heroe );
    }

    // const heroes = await Promise.all( heroesPromesas );
    // console.log( heroes );
    // heroes.forEach( heroe => console.log( heroe ) );
    console.timeEnd('HeroesCiclo');
};

export const heroesIfAwait = async( id ) => {
    if( ( await buscarHeroeAsync( id ) ).nombre === 'Ironman' ) {
        console.log('es el mejor');
    } else {
        console.log('no es el mejor')
    }
}