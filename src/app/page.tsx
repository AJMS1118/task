"use client";

import { SignUpForm } from "./components/auth/SignUpForm";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";
import { StarryBackground } from "./components/ui/StarryBackground";

export default function Home() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <StarryBackground />
        <div className="flex justify-center">
          <SignUpForm />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
