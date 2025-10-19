"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark" | "system";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    // 从localStorage读取保存的主题设置
    try {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
        setTheme(savedTheme);
      }
    } catch (error) {
      console.error('Error reading theme from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    try {
      const root = window.document.documentElement;
      
      // 移除所有主题类
      root.classList.remove("light", "dark");
      
      if (theme === "system") {
        // 跟随系统主题
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.classList.add(systemTheme);
      } else {
        root.classList.add(theme);
      }
      
      // 保存到localStorage
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error('Error setting theme:', error);
    }
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const getThemeIcon = (theme: Theme) => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      case "system":
        return <Monitor className="h-4 w-4" />;
    }
  };

  const getThemeLabel = (theme: Theme) => {
    switch (theme) {
      case "light":
        return "浅色";
      case "dark":
        return "深色";
      case "system":
        return "跟随系统";
      default:
        return theme;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-2">
          {getThemeIcon(theme)}
          <span className="ml-1">{getThemeLabel(theme)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {(["light", "dark", "system"] as Theme[]).map((themeOption) => (
          <DropdownMenuItem
            key={themeOption}
            onClick={() => handleThemeChange(themeOption)}
            className={themeOption === theme ? "bg-accent" : ""}
          >
            {getThemeIcon(themeOption)}
            <span className="ml-2">{getThemeLabel(themeOption)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
