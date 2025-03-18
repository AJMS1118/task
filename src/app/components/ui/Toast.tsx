import React from "react";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";

export type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  type: ToastType;
  message: string;
  title?: string;
}

export const Toast: React.FC<ToastProps> = ({ type, message, title }) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-300" />
        );
      case "error":
        return (
          <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-300" />
        );
      case "warning":
        return (
          <AlertTriangle className="w-5 h-5 text-yellow-500 dark:text-yellow-300" />
        );
      case "info":
        return <Info className="w-5 h-5 text-blue-500 dark:text-blue-300" />;
      default:
        return null;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50 dark:bg-gray-800/90 dark:bg-gradient-to-r dark:from-gray-800 dark:to-green-900/30 border-green-200 dark:border-green-800";
      case "error":
        return "bg-red-50 dark:bg-gray-800/90 dark:bg-gradient-to-r dark:from-gray-800 dark:to-red-900/30 border-red-200 dark:border-red-800";
      case "warning":
        return "bg-yellow-50 dark:bg-gray-800/90 dark:bg-gradient-to-r dark:from-gray-800 dark:to-yellow-900/30 border-yellow-200 dark:border-yellow-800";
      case "info":
        return "bg-blue-50 dark:bg-gray-800/90 dark:bg-gradient-to-r dark:from-gray-800 dark:to-blue-900/30 border-blue-200 dark:border-blue-800";
      default:
        return "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700";
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "success":
        return "text-green-800 dark:text-green-200";
      case "error":
        return "text-red-800 dark:text-red-200";
      case "warning":
        return "text-yellow-800 dark:text-yellow-200";
      case "info":
        return "text-blue-800 dark:text-blue-200";
      default:
        return "text-gray-800 dark:text-gray-200";
    }
  };

  const getTitle = () => {
    if (title) return title;

    switch (type) {
      case "success":
        return "Success!";
      case "error":
        return "Error!";
      case "warning":
        return "Warning!";
      case "info":
        return "Info!";
      default:
        return "";
    }
  };

  return (
    <div
      className={`w-52 max-w-full rounded-2xl shadow-lg border p-3 mb-2 ${getBackgroundColor()}`}
    >
      <div className="flex">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div className="ml-3 flex-1">
          <div className="flex justify-between items-center">
            <p className={`font-medium ${getTextColor()}`}>{getTitle()}</p>
            <button
              type="button"
              className="inline-flex text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className={`text-sm mt-1 ${getTextColor()}`}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  return (
    <div className="fixed top-4 left-3 z-50">
      <Toast type="success" message="Lorem ipsum" title="Success" />
      <Toast type="error" message="Lorem ipsum" title="Error" />
      <Toast type="warning" message="Lorem ipsum" title="Warning" />
      <Toast type="info" message="Lorem ipsum" title="Info" />
    </div>
  );
};
