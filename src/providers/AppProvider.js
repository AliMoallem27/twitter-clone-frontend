import React, { createContext, useState } from "react";

export let AppContext = createContext();
export let SetAppContext = createContext();

function AppProvider({ children }) {
  let [hamburgerMenuStatus, setHambergurMenuStatus] = useState("CLOSE");

  return (
    <AppContext.Provider value={hamburgerMenuStatus}>
      <SetAppContext.Provider value={setHambergurMenuStatus}>{children}</SetAppContext.Provider>
    </AppContext.Provider>
  );
}

export default AppProvider;
