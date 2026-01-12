import { useNavigate } from "react-router-dom";
import { LogoutAccount } from "../utils/fakeAuth";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    LogoutAccount();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <h1>Unauthorized</h1>
      <button onClick={() => handleLogout()}>Login</button>
    </>
  )
}

export default Unauthorized;