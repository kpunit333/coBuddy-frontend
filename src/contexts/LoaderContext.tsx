import { createContext } from "react";

interface LoaderContextType {
  showLoader: boolean;
  setShowLoader: (value: boolean) => void;
}

export const LoaderContext = createContext<LoaderContextType | undefined>(undefined);