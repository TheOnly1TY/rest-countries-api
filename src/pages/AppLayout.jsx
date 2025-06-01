import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
