import { createContext, useContext, useState } from "react";

// 1. Création du contexte
export const IsAdminModeContext = createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},
});

// 2. Installation du contexte (Provider)
export default function IsAdminModeContextProvider({ children }) {
  const [isAdminMode, setIsAdminMode] = useState(false);

  const valueIsAdminModeContext = {
    isAdminMode: isAdminMode,
    setIsAdminMode: setIsAdminMode,
  };

  return (
    <IsAdminModeContext.Provider value={valueIsAdminModeContext}>
      {children}
    </IsAdminModeContext.Provider>
  );
}

// 3. Consommation du contexte
// eslint-disable-next-line react-refresh/only-export-components
export const useIsAdminModeContext = () => useContext(IsAdminModeContext);
