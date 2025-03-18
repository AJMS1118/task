import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "social";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "left",
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none";

  const variantClasses = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 dark:active:bg-orange-800 dark:ring-1 dark:ring-orange-500/30",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-500 dark:ring-1 dark:ring-orange-500/10",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:ring-1 dark:ring-orange-500/10",
    ghost:
      "text-gray-700 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:ring-1 dark:ring-orange-500/5",
    social:
      "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 active:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 dark:active:bg-gray-600 dark:ring-1 dark:ring-orange-500/10",
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-2",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  const widthClass = fullWidth ? "w-full" : "";

  // Permitir que el valor de rounded se establezca desde className
  const defaultRounded = "rounded-md";
  const hasCustomRounded = className.includes("rounded-");

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${
        sizeClasses[size]
      } ${widthClass} ${hasCustomRounded ? "" : defaultRounded} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};
