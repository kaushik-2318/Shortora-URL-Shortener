import { useState, useEffect } from "react";

import Preloader from "./components/preloader";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Link from "./components/link";
import Statistics from "./components/statistics";
import Footer from "./components/footer";

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) {
    return <Preloader />;
  }

  return (
    <div className="text-[18px] font-['Poppins']">
      <Navbar />
      <Header />
      <Link />
      <Statistics />
      <Footer />
    </div>
  );
}
