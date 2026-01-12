import { Outlet, useNavigate } from "react-router-dom";
import { LogoutAccount } from "../utils/fakeAuth";

const MainLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    LogoutAccount();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <header>
        <p>Main Layout</p>
        <button onClick={() => handleLogout()}>Logout</button>
      </header>
      <main>
        {/* Fungsi outlet ini buat ngerender child route */}
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout;