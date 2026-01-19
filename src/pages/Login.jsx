import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { LoginAccount } from "@/utils/fakeAuth";

import IMAGES from '@/assets/img/authPage/index'

import { logo2 } from "@/assets";

const Login = () => {
  // Set random image
  const [authPlaceholderImage] = useState(
    () => IMAGES[Object.keys(IMAGES)[Math.floor(Math.random() * Object.keys(IMAGES).length)]]
  );

  const navigate = useNavigate();

  const handleLogin = () => {
    LoginAccount({ role: 'admin' });

    setTimeout(() => {
      console.log("loading...");
      navigate("/dashboard", { replace: true });
    }, 500);
  };

  return (
    <div className="h-screen flex">
      <div className="flex-1 overflow-hidden">
        <img
          src={authPlaceholderImage}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <img src={logo2} alt="logo" className="w-[320px]" />
          <p className="text-lg">Masuk untuk melanjutkan</p>
        </div>

        <div className="w-94 flex flex-col gap-4">
          <div className="h-21 bg-amber-100">Input 1</div>
          <div className="h-21 bg-amber-100">Input 2</div>
          <div className="h-21 bg-amber-100">Input 3</div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <p>Belum memiliki akun COREIMTECH? <span className="font-medium text-main">Daftar</span></p>
          <button
            type="submit"
            onClick={() => handleLogin()}
            className="bg-main p-2 px-4 rounded-md text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login;