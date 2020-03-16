import React, {useContext} from 'react'
import { settingsContext } from '../context/settingsContext'

const Header = () => {
    const [theme] = useContext(settingsContext)
    
    return(
        <div>
            <h3>List of movies: {theme.language}</h3>
        </div>
    )
}

export default Header;