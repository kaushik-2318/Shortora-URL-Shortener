import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import axios from "axios";
import { History, Link, LogIn, UserPlus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useAuth } from "@clerk/clerk-react";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [history, setHistory] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      const token = await getToken();
      axios
        .get("https://shortora-backend.vercel.app/history", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setHistory(response.data);
        })
        .catch((error) => {
          console.error("Error fetching history:", error);
        })
        .finally(() => {
          setIsMounted(false);
        });
    };
    fetch();
  }, []);

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
        {!isMounted && (
          <SignedIn>
            <UserButton />
            <button
              onClick={() => {
                setIsMounted(true);
              }}
              className="bg-white/5 hover:bg-purple-500/20 py-2 border-white/20 text-white cursor-pointer flex justify-center items-center rounded-xl px-2 duration-200 hover:scale-105"
            >
              <History className="w-4 h-4 mr-2" />
              History
            </button>
          </SignedIn>
        )}
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
      <>
        {isMounted && (
          <div className="fixed top-0 right-0 w-1/4 h-screen bg-black/50 flex flex-col text-white px-10 py-5 z-50">
            <div className="text-white flex justify-between items-center">
              History
              <div
                onClick={() => setIsMounted(false)}
                className="bg-gray-700/30 cursor-pointer hover:bg-gray-800/40  rounded-full duration-300 p-2"
              >
                <X className="w-4 h-4" />
              </div>
            </div>
            <div className="w-full border-b border-white/20 my-2" />
            <div>
              <ul className="overflow-y-auto h-full">
                {history.map((item) => (
                  <li
                    className="text-sm overflow-x-hidden  my-3 text-white/30 hover:text-white cursor-pointer duration-300"
                    key={item._id}
                  >
                    {item.url}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
