import { Outlet } from "react-router-dom";

import MainSidebar from "../components/MainLayoutComponents/MainSidebar";
import MainHeader from "../components/MainLayoutComponents/MainHeader";

const MainLayout = () => {
  return (
    <>
      <div className="flex bg-bg-canvas">
        <MainSidebar />

        <div className="flex-1 h-screen p-4 flex flex-col gap-6">
          <MainHeader />

          <main className="flex-1 p-4 rounded-card shadow-surface-card-default bg-bg-white">
            {/* Fungsi outlet ini buat ngerender child route */}
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default MainLayout;