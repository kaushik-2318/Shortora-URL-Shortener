import { useState, useEffect } from "react";
import Gradient from "./gradient";
import Navbar from "./navbar";
import Header from "./header";
import Link from "./link";
import Statistics from "./statistics";
import Footer from "./footer";
import Preloader from "./preloader";

export default function Home() {
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
      <div className="z-10 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <Gradient />
        <Navbar />
        <Header />
        <Link />
        <Statistics />
        <Footer />
      </div>
    </>
  );
}
