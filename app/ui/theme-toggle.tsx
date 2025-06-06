"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function getIcon(theme: Theme) {
  switch (theme) {
    case "light":
      return (
        <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" />
        </svg>
      );
    case "dark":
      return (
        <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" />
        </svg>
      );
    case "system":
      return (
        <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="4 4 16 16">
          {/* <path d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" /> */}
          <path d="M11,7A2,2 0 0,0 9,9V17H11V13H13V17H15V9A2,2 0 0,0 13,7H11M11,9H13V11H11V9Z" />
        </svg>
        // <svg
        //   className="w-1/2 h-1/2"
        //   fill="currentColor"
        //   xmlns="http://www.w3.org/2000/svg"
        //   viewBox="0 0 24 24"
        // >
        //   <path d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" />
        // </svg>
      );
  }
}

export function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setCurrentTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (currentTheme === "system") {
      root.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    } else {
      root.setAttribute("data-theme", currentTheme);
      localStorage.setItem("theme", currentTheme);
    }
  }, [currentTheme, mounted]);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-muted rounded-md animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="flex h-full bg-slate-500 rounded-full overflow-hidden p-1 gap-1">
      {(["system", "light", "dark"] as const).map((theme) => {
        return (
          <button
            key={theme}
            title={`Switch to ${theme} theme`}
            onClick={() => setCurrentTheme(theme)}
            className={clsx(
              "flex h-full rounded-full aspect-square justify-center items-center transition-colors ",
              {
                "text-slate-500 bg-slate-300": theme === currentTheme,
                "bg-slate-500 text-slate-300 hover:bg-slate-400 ":
                  theme !== currentTheme,
              },
            )}
            aria-label={`Switch to ${theme} theme`}
          >
            {getIcon(theme)}
          </button>
        );
      })}
    </div>
  );
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }

    const updateResolvedTheme = () => {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setResolvedTheme(
        theme === "system" ? (isDark ? "dark" : "light") : theme,
      );
    };

    updateResolvedTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateResolvedTheme);

    return () => mediaQuery.removeEventListener("change", updateResolvedTheme);
  }, [theme]);

  return { theme, resolvedTheme, setTheme };
}
