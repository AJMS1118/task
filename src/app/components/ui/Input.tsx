import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  error?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, endIcon, error, label, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label}
          </label>
        )}
        <div className="relative rounded-md shadow-sm">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              block w-full px-3 py-2  bg-gray-200  dark:bg-[#424242] dark:text-white 
              rounded-3xl shadow-sm placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 
                sm:text-sm
              dark:ring-1 dark:ring-orange-500/10
              ${icon ? "pl-10" : ""}
              ${endIcon ? "pr-10" : ""}
              ${
                error
                  ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-600 dark:text-red-200 dark:placeholder-red-400 dark:focus:ring-red-600 dark:focus:border-red-600"
                  : ""
              }
              ${className || ""}
            `}
            {...props}
          />
          {endIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {endIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
