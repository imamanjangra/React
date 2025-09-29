import { useTheme } from "../Contexts/ThemeContext"

function ThemeBtn() { 
  const { Theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border dark:border-gray-400 border-gray-800 
                 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      {Theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeBtn
