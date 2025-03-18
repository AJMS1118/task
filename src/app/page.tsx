"use client";

import { SignUpForm } from "./components/auth/SignUpForm";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";

export default function Home() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="flex justify-center">
          <SignUpForm />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
