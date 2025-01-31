import { Outlet } from "react-router";
import Navigation from "../common/navigation";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Outlet />
    </div>
  );
}
