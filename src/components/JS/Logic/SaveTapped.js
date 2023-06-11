import React, {createContext, useState} from "react";

export const SaveTappedContext = createContext();

export const SaveTappedProvider = ({children}) => {
  const [saveTapped, setSaveTapped] = useState({});

  return <SaveTappedContext.Provider value={{saveTapped, setSaveTapped}}>{children}</SaveTappedContext.Provider>;
};
