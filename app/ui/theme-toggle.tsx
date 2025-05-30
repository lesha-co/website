"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function getIcon(theme: Theme) {
  switch (theme) {
    case "light":
      return (
        <svg
          className="w-1/2 h-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="m12 1 0 2m0 18 0 2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12l2 0m18 0 2 0M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      );
    case "dark":
      return (
        <svg
          className="w-1/2 h-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      );
    case "system":
      return (
        <svg
          className="w-1/2 h-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect width="14" height="8" x="5" y="2" rx="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" />
          <path d="M6 18h2" />
          <path d="M12 18h6" />
        </svg>
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
    <div className="flex h-full">
      {(["light", "system", "dark"] as const).map((theme, index, arr) => {
        const first = index === 0;
        const last = index === arr.length - 1;
        return (
          <button
            key={theme}
            onClick={() => setCurrentTheme(theme)}
            className={clsx(
              "flex h-full aspect-square justify-center items-center transition-colors ",
              {
                "rounded-r-md": last,
                "rounded-l-md": first,
                "text-slate-100 bg-slate-700": theme === currentTheme,
                "bg-slate-500 text-slate-100 hover:bg-slate-700 ":
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
        theme === "system"
          ? isDark
            ? "dark"
            : "light"
          : (theme as "light" | "dark"),
      );
    };

    updateResolvedTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateResolvedTheme);

    return () => mediaQuery.removeEventListener("change", updateResolvedTheme);
  }, [theme]);

  return { theme, resolvedTheme, setTheme };
}
