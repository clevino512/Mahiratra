import React, { useEffect, useState } from "react";
import {FaSun, FaMoon} from 'react-icons/fa';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 text-2xl rounded bg-gray-200 dark:bg-gray-900 dark:text-white"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
