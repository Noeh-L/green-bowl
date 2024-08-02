import { createContext, useContext, useState } from "react";

// 1. Création du contexte
export const IsPanelOpenContext = createContext({
  isPanelOpen: true,
  setIsPanelOpen: () => {},
});

// 2. Installation du contexte (Provider)
export default function IsPanelOpenContextProvider({ children }) {
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const valueIsPanelOpenContext = {
    isPanelOpen: isPanelOpen,
    setIsPanelOpen: setIsPanelOpen,
  };

  return (
    <IsPanelOpenContext.Provider value={valueIsPanelOpenContext}>
      {children}
    </IsPanelOpenContext.Provider>
  );
}

// 3. Consommation du contexte
// eslint-disable-next-line react-refresh/only-export-components
export const useIsPanelOpenContext = () => useContext(IsPanelOpenContext);
