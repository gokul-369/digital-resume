import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { navLinks } from "../../data";
import useTheme from "../../hooks/useTheme";
import type { ThemeClassSet } from "../../types";

function Nav({ theme }: { theme: ThemeClassSet }) {
  const { toggleTheme, theme: themeName } = useTheme();

  return (
    <nav
      className="inline-flex gap-4 items-center justify-around rounded-full border border-white/15 backdrop-blur-md px-4 py-2 text-xs text-gray-200
    bg-white/5 dark:bg-white/5
    shadow-[0_8px_30px_rgba(15,23,42,0.45)]
    transition-colors duration-200
    "
    >
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.value}
              className={`text-sm font-thin ${theme.textPrimary}  hover:text-gray-300 transition-colors duration-300`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {themeName === "light" ? (
        <SunIcon
          onClick={toggleTheme}
          className={`${theme.textPrimary} transition-transform duration-300 ease-in-out transform hover:rotate-90`}
        />
      ) : (
        <MoonIcon
          onClick={toggleTheme}
          className={`${theme.textPrimary} transition-transform duration-300 ease-in-out transform hover:rotate-45`}
        />
      )}
    </nav>
  );
}

export default Nav;
