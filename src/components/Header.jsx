import { memo } from "react";
import { Theme } from "./Theme";
import { Title } from "./Title";
export const Header = memo(() => {
  return (
    <header className="w-full bg-white dark:bg-[#2B3844] shadow-[0_2px_4px_0_rgba(0,0,0,0.0562)]">
      <div className="max-w-[80rem] mx-auto flex justify-between items-center h-20 px-4">
        <Title />
        <Theme />
      </div>
    </header>
  );
});
