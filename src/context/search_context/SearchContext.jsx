import React, { useState } from "react"

export const SearchContext = React.createContext()

export default function ContextProvider({children}){
    const [isSearched,setIsSearched]=useState(false)
    return <SearchContext.Provider value={{isSearched,setIsSearched}}>
        {children}
    </SearchContext.Provider>
}