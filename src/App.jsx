import { useState, useEffect } from "react";

import Preloader from "./components/preloader";
import Home from "./components/home";
import { Route, Routes } from "react-router";
import SignInPage from "./components/sign-in";
import SignUpPage from "./components/sign-up";

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) {
    return <Preloader />;
  }

  return (
    <>
      <div className="text-[18px]  font-['Poppins'] select-none cursor-default">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Routes>
      </div>
    </>
  );
}
