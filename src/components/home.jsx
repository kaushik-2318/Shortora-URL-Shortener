import Gradient from "./gradient";
import Navbar from "./navbar";
import Header from "./header";
import Link from "./link";
import Statistics from "./statistics";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <div className="mb-[270px] pb-20  z-10 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
