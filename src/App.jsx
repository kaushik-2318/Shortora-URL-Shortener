import { useState, useEffect } from "react";

import Preloader from "./components/preloader";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Link from "./components/link";
import Statistics from "./components/statistics";
import Footer from "./components/footer";
import Gradient from "./components/gradient";

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
      <div className="text-[18px] mb-[270px] font-['Poppins'] z-10 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <Gradient />
        <Navbar />
        <Header />
        <Link />
        <Statistics />
      </div>
      <Footer />
    </>
  );
}
