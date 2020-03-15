import React, { useContext } from 'react';
import Movie from './Movie'
import {MovieContext} from './MovieContext'

const MovieList = () => {
    const [movies] = useContext(MovieContext);

    return(
        <> 
        {movies.map(movie => (<Movie name={movie.name} price={movie.price} key={movie.id}></Movie>))}    
        </>
    )
}

export default MovieList