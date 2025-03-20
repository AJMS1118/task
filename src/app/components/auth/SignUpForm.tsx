import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";
import { Input } from "../ui/Input";
import { Divider } from "../ui/Divider";
import { LanguageSelector } from "../ui/LanguageSelector";
import { ThemeToggle } from "../ui/ThemeToggle";
import { DropdownMenu } from "../ui/DropdownMenu";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flagCode: string;
}

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const productMenuItems = [
    { label: "Gift Cards", href: "/" },
    { label: "Device Service", href: "/" },
    { label: "Boxes/Dongles/Credits", href: "/about" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, agreedToTerms });
  };

  const handleSelectLanguage = (language: Language) => {
    console.log("Selected language:", language);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-[#1e1e1e] text-gray-900 dark:text-gray-100 transition-colors duration-200 overflow-hidden">
      <header className="py-1.5 w-[62%] mt-2">
        <div className="px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold">DirectCodes</div>
              <ThemeToggle />
              <DropdownMenu label="Product page" items={productMenuItems} />
            </div>

            <div className="flex items-center space-x-4">
              <LanguageSelector onSelectLanguage={handleSelectLanguage} />
              <Link href="/">
                <button
                  style={{}}
                  className="py-1.5 px-5 rounded-full  bg-white dark:bg-[#212121] dark:shadow-gray-500 dark:shadow-sm dark:text-white border-gray-300 text-sm text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                >
                  Log In
                </button>
              </Link>
              <Link href="/">
                <button className="py-1.5 px-5 rounded-full text-sm font-medium shadow-sm hover:shadow transition-shadow duration-200 bg-gradient-to-br from-[#d8b4fe] from-0% via-white via-50% to-[#fed7aa] to-100% dark:bg-gradient-to-br dark:from-[#6B317D] dark:from-0% dark:via-[#121212] dark:via-60% dark:to-orange-400 dark:to-100% dark:text-white">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex justify-center items-center py-2">
        <div className="w-full max-w-xs bg-white dark:bg-[#292929]/90 rounded-2xl relative p-4 border border-gray-200 dark:border-gray-700 shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] dark:shadow-[0_0_25px_rgba(255,255,255,0.15)]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/5 to-transparent blur-sm"></div>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/5 to-transparent blur-sm"></div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/5 to-transparent blur-sm"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/5 to-transparent blur-sm"></div>
            {isDark && (
              <div className="absolute left-[5%] top-[52%] w-1/3 h-24 bg-gradient-to-r from-purple-600/20 via-purple-500/15 to-transparent blur-lg"></div>
            )}
          </div>

          <div className="relative z-10">
            <h2 className="text-lg font-semibold text-center mb-1">Sign Up</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-3 text-xs">
              Choose a convenient method of registration
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                icon={<Mail className="text-gray-400" size={18} />}
                type="email"
                placeholder="Enter your email or phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                icon={
                  <Lock
                    className="text-gray-400 dark:text-gray-500"
                    size={18}
                  />
                }
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                endIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                }
              />

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-3.5 w-3.5 text-orange-500 focus:ring-orange-400 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 accent-orange-500"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                  />
                </div>
                <div className="ml-2 text-xs">
                  <label
                    htmlFor="terms"
                    className="text-gray-700 dark:text-gray-300 text-xs"
                  >
                    I agree with{" "}
                    <Link
                      href="/terms"
                      className="font-bold text-gray-900 dark:text-white hover:underline"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-bold text-gray-900 dark:text-white hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-1.5 px-4 bg-orange-600 text-white font-medium rounded-full text-sm transition-colors duration-200"
              >
                Sign Up
              </button>
            </form>

            <Divider text="OR" className="my-2" />

            <div className="space-y-2">
              <button
                type="button"
                className="w-full py-2 px-4 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-full text-xs flex items-center justify-center gap-2 bg-gray-200 dark:bg-[#333333] hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_28_1979)">
                    <path
                      d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_28_1979">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Continue with Google
              </button>

              <button
                type="button"
                className="w-full py-2 px-4 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-full text-xs flex items-center justify-center gap-2 bg-gray-200 dark:bg-[#333333] hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Continue with Facebook
              </button>
            </div>

            <p className="text-center mt-2 text-xs text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/"
                className="font-bold text-gray-900 dark:text-white hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="py-1.5 w-full mb-4">
        <div className="px-6 w-full">
          <div className="flex justify-around items-center w-full">
            <div className="flex space-x-4">
              <Link
                href="/terms"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Contact us
              </Link>
            </div>

            <div className="flex items-center relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="text-gray-400 dark:text-gray-500" size={14} />
              </div>
              <input
                type="email"
                placeholder="E-mail address"
                className="px-3 py-2 pl-9 w-56 text-xs text-gray-700 dark:text-gray-300 bg-gray-300 dark:bg-[#121212] border border-gray-300 dark:border-gray-600 rounded-l-full focus:outline-none "
              />
              <button
                type="button"
                className="absolute -right-2 rounded-full px-4 py-3 text-xs text-black dark:text-white bg-white dark:bg-[#212121] hover:bg-gray-50 dark:hover:bg-gray-750 border border-gray-300 dark:border-gray-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
