import React, {useState, createContext} from 'react'
import { languageData } from '../data/languageData'
export const settingsContext = createContext();

export const ContextProvider = props => {

    const [settings, setSettings] = useState(
        {
            language: 'ENG',
            languageData: languageData,
            theme: 'Light',
            currency: 'USD',
            currentPage: 'Bitcoin'
        }
    );

    return(<settingsContext.Provider value={[settings, setSettings]}> {props.children} </settingsContext.Provider>)
    
}