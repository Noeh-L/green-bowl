import { createContext, useContext, useState } from "react";

// 1. Création du contexte
export const ActiveTabContext = createContext({
  activeTab: "true",
  setActiveTab: () => {},
});

// 2. Installation du contexte (Provider)
export default function ActiveTabContextProvider({ children }) {
  const [activeTab, setActiveTab] = useState("addProduct");

  const valueActiveTabContext = {
    activeTab: activeTab,
    setActiveTab: setActiveTab,
  };

  return (
    <ActiveTabContext.Provider value={valueActiveTabContext}>
      {children}
    </ActiveTabContext.Provider>
  );
}

// 3. Consommation du contexte
// eslint-disable-next-line react-refresh/only-export-components
export const useActiveTabContext = () => useContext(ActiveTabContext);
