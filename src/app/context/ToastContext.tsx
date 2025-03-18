import React from "react";
import { ToastContainer } from "../components/ui/Toast";

export const ToastContext = React.createContext(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ToastContext.Provider value={null}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
