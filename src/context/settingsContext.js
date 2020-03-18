import React, {useState, createContext} from 'react'

export const settingsContext = createContext();

export const ContextProvider = props => {

    const [settings, setSettings] = useState(
        {
            language: 'ENG',
            theme: 'Light',
            currency: 'USD',
            currentPage: 'Bitcoin'
        }
    );

    return(<settingsContext.Provider value={[settings, setSettings]}> {props.children} </settingsContext.Provider>)
    
}