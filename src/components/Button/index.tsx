import useTheme from "../../hooks/useTheme";
import { themeFactory } from "../../utils/styleFactory";

function Button({
  text,
  variant = "primary",
  rounded = true,
  className,
}: {
  text: string;
  rounded?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}) {
  const { theme: currentTheme } = useTheme();
  const theme = themeFactory(currentTheme);
  const styles = {
    primary: `${theme.bgPrimaryAccent} text-white hover:bg-indigo-600`,
    secondary: `bg-gray-200 text-gray-800 hover:bg-gray-300`,
    tertiary: `${theme.borderSecondary} border ${theme.textPrimary} hover:border-indigo-500 dark:hover:${theme.textPrimary} backdrop-blur-sm`,
  };
  return (
    <button
      className={`px-4 py-2 ${rounded ? "rounded-full" : "rounded"} hover:opacity-90 transition-colors duration-200 ${styles[variant] || styles.secondary} ${className || ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
