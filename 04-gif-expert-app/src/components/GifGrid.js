import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
import getGifs from '../helpers/getGifs';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);

    // Desestructuramos data que viene del custom hook
    const { loading} = useFetchGifs();

    // useEffect( () => {
    //     getGifs( category )
    //     // Esto retorna una promesa
    //         // .then( imgs => setImages( imgs ) )
    //         // Podemos usar lo siguiente
    //         // Ya que tenemos una función que su primer argumento es mandado a la función que esta adentro
    //         .then( setImages );
    // }, [ category ]);


    return (
        <>
            <h3> { category } </h3>

            {/* Usamos el  operador ternario para poner un condicional*/}
            { loading ? 'cargando...' : 'Data cargada' }

            <div className ='card-grid'>
                {/* <ol>
                    {
                        categories.map( category => (
                            <GifGrid
                                key = { category }
                                category = { category }
                            />
                        ))
                    }
                </ol> */}
                {
                    images.map( img => (
                        <GifGridItem
                            key = { img.id }
                            // img = { img }
                            // Podemos usar el siguiente metodo u usar props en el componente
                            { ...img } // Así envio cada una de las propiedades como una propiedad independiente
                        />
                    ))
                }
            </div>
        </>
    )
}

export  default GifGrid;
