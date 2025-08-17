import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link, LogIn, UserPlus } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center z-50 fixed px-30 py-3 backdrop-blur-2xl cursor-default  w-full">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
          <Link className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-400 to-pink-900 bg-clip-text text-transparent">
            Shortora
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="flex gap-4">
            <NavLink to="/login">
              <button className="bg-white/5 hover:bg-purple-500/20 py-2 border-white/20 text-white cursor-pointer flex justify-center items-center rounded-xl px-2 duration-200 hover:scale-110">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </button>
            </NavLink>

            <NavLink to="/register">
              <button className="bg-gradient-to-r  from-purple-500 py-2 to-pink-500 text-white cursor-pointer flex justify-center items-center rounded-xl px-2 duration-200 hover:scale-110 ">
                <UserPlus className="w-4 h-4 mr-2" />
                Sign Up
              </button>
            </NavLink>
          </div>
        </SignedOut>
      </div>
    </div>
  );
}
