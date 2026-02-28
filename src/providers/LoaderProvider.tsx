import { createContext, useContext, useState, type ReactNode } from "react";
import Loader from "../services/Loader";

interface LoaderContextType {
  showLoader: boolean;
  setShowLoader: (value: boolean) => void;
}

export const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [showLoader, setShowLoader] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={{ showLoader, setShowLoader }}>
      {children}

      {/* Global Fullscreen Loader */}
      {showLoader && (
        <Loader show={showLoader} />
      )}
    </LoaderContext.Provider>
  );
};

 export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within LoaderProvider");
  }
  return context;
};