import { useNavigate } from "react-router-dom";
import { LoginAccount } from "../utils/fakeAuth";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('event :>> ', e);

    const role = e.target.role.value;

    LoginAccount({ role });

    setTimeout(() => {
      console.log("loading...");
      navigate("/dashboard", { replace: true });
    }, 500);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => handleLogin(e)} className="flex-row bg-amber-200">
        <label htmlFor="roleOptions">Role</label>
        <select name="role" id="roleOptions">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login;