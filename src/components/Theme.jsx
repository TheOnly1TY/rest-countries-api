import { memo } from "react";
import { useTheme } from "../context/themeContext";

export const Theme = memo(() => {
  const { handleThemeSwitch, theme } = useTheme();
  return (
    <div
      className="flex justify-center items-center gap-1 cursor-pointer"
      onClick={handleThemeSwitch}
    >
      <img src="/sun.svg" alt="mode_icon" />
      <p className="text-[12px] md:text-base text-[#111517] dark:text-white font-semibold font-display">{`${
        theme ? "Dark Mode" : "Light Mode"
      }`}</p>
    </div>
  );
});
