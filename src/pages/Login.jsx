import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { LoginAccount } from "@/utils/fakeAuth";

import { IMAGES, authWords } from '@/assets/img/authPage/index'

import { logo2 } from "@/assets";

const Login = () => {
  // Set random image
  const [authVisual] = useState(() => {
    const imageKeys = Object.keys(IMAGES);
    return {
      image: IMAGES[imageKeys[Math.floor(Math.random() * imageKeys.length)]],
      word: authWords[Math.floor(Math.random() * authWords.length)],
    };
  });


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
      <div className="flex-1 overflow-hidden p-4 relative">
        <img
          src={authVisual.image}
          className="object-cover object-center w-full h-full rounded-2xl"
        />
        <div class="absolute inset-0 bottom-4 left-4 right-4 bg-linear-to-t from-black/80 via-black/45 to-transparent rounded-2xl">
          <p className="absolute bottom-12 left-12 font-medium text-2xl text-white">{authVisual.word}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <img src={logo2} alt="logo" className="w-55" />
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