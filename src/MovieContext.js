import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            name: 'Los lo',
            price: '$10',
            id: 123123
        },
        {
            name: 'jeje',
            price: '$20',
            id: 123122
        },
        {
            name: 'juju',
            price: '$30',
            id: 1243553
        }
    ]);

    return(<MovieContext.Provider value={[movies, setMovies]}> {props.children} </MovieContext.Provider>)
    
}