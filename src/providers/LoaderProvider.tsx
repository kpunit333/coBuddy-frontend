import { useState, type ReactNode } from "react";
import { LoaderContext } from "../contexts/LoaderContext";
import Loader from "../utils/Loader";

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