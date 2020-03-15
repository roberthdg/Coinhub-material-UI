import React from 'react'

const Movie = ({name, price}) => {

    return(
        <div>
            <h3>{name}</h3>
            <h2>{price}</h2>
        </div>
    )
}

export default Movie;