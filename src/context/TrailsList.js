import React, { createContext, useState } from "react";

export const TrailsListContext = createContext();

const TrailsListProvider = ({children}) => {
  const[trailsList, setTrailsList] = useState([]);
  return (
    <TrailsListContext.Provider value={{trailsList,setTrailsList}}>
      {children}
    </TrailsListContext.Provider>
  );
}

export default TrailsListProvider;