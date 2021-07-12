import React, { createContext, useState } from "react";

export const TrailsListContext = createContext();

const TrailsListProvider = ({children}) => {
  const[trailsList, setTrailsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [trail, setTrail] = useState([]);
  const [grade, setGrade] = useState([]);


  return (
    <TrailsListContext.Provider 
      value={{
        trailsList,
        setTrailsList,
        modalVisible,
        setModalVisible,
        trail,
        setTrail,
        grade,
        setGrade
      }}
    >
      {children}
    </TrailsListContext.Provider>
  );
}

export default TrailsListProvider;