import { Route, Routes } from "react-router";
import { RedirectToSignIn } from "@clerk/clerk-react";

import Home from "./components/home";
import SignInPage from "./components/sign-in";
import SignUpPage from "./components/sign-up";
import SyncUser from "./components/sync";
import Navigate from "./components/navigate";

export default function App() {
  return (
    <div className="text-[18px] font-['Poppins'] select-none cursor-default">
      <SyncUser />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login/sso-callback" element={<RedirectToSignIn />} />
        <Route path="/*" element={<Navigate />} />
      </Routes>
    </div>
  );
}
