const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'hnmqqh6c';
const cloudURL = 'https://api.cloudinary.com/v1_1/dcoszj7v2/upload';

// fetch( jokeUrl ).then( resp => {
//     resp.json()
//         .then( data => {
//             console.log( data );
//         })
// });

// fetch( jokeUrl )
//     .then( resp => resp.json() )
//     // .then( data => console.log( data ) ); // .then( console.log );
//     .then( ({ id, value }) => {
//         console.log( id, value );
//     });

const obtenerChiste = async () => {

    try {

        const resp = await fetch( jokeUrl );
        if( !resp.ok ) return alert('No se puede realizar la peticion');
        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value };

    } catch (error) {
        throw error;
    }
};

const obtenerUsuarios = async () => {
    const resp = await fetch( urlUsuarios );
    const { data:usuarios } = await resp.json();

    return usuarios;
};

const subirImagen = async ( archivoSubir ) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset );
    formData.append('file', archivoSubir );

    try {

        const resp = await fetch( cloudURL, {
            method: 'POST',
            body: formData,
        });

        if( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }
};

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
};