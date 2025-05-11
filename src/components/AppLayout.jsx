import { Outlet } from "react-router-dom";
import { Title } from "./Title";
import { Theme } from "./Theme";

export function AppLayout() {
  return (
    <>
      <header className="w-full bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.0562)]">
        <div className="max-w-[80rem] mx-auto flex justify-between items-center h-20 px-4">
          <Title />
          <Theme />
        </div>
      </header>

      <Outlet />
    </>
  );
}
