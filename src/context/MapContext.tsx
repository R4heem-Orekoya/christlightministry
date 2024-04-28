import React, { createContext, ReactNode, useState } from 'react'

type mapContextType = {
   isMapOpen: boolean
   setIsMapOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export const Context = createContext({} as mapContextType)

const MapContextProvider = ({ children } : { children: ReactNode}) => {
   const [isMapOpen, setIsMapOpen] = useState<boolean>(false)
   
   return (
      <Context.Provider value={{isMapOpen, setIsMapOpen}}>
         {children}
      </Context.Provider>
   )
}

export default MapContextProvider
