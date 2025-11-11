import { Switch } from "@heroui/switch";
import { MoonIcon, SunIcon } from "./icons";
import { useTheme } from "@heroui/use-theme";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Switch
      isSelected={isDark}
      onChange={() => setTheme(isDark ? "light" : "dark")}
      color="danger"
      size="lg"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
    >
      
    </Switch>
  );
};
