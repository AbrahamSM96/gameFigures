import {createContext, useContext} from 'react'
import data from '../mock/condition1.json'
const AppContext = createContext();

export function ContextWrapper({children}){
    const { results } = data;
    return (
        <AppContext.Provider value={results}>{children}</AppContext.Provider>
    );
}

export function useAppContext(){
    return useContext(AppContext)
}