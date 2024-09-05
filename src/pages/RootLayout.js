import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function RootLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
}
