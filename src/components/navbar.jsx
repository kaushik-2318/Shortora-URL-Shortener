import { Link, LogIn, User, UserPlus } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

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
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-black/20 px-3 py-2 rounded-lg border border-white/10">
              <User className="w-4 h-4 text-purple-300" />
              <span className="text-white text-sm">{user?.name}</span>
            </div>
            {/* <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="bg-white/5 hover:bg-red-500/20 border-white/20 text-white"
                >
                  Logout
                </Button> */}
            <button>Logout</button>
          </div>
        ) : (
          <div className="flex gap-4">
            {/* <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setAuthMode("login")}
                  className="bg-white/5 hover:bg-purple-500/20 border-white/20 text-white"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button> */}
            <button className="bg-white/5 hover:bg-purple-500/20 py-2 border-white/20 text-white cursor-pointer flex justify-center items-center rounded-xl px-2 duration-200 hover:scale-110">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </button>
            <button className="bg-gradient-to-r  from-purple-500 to-pink-500 text-white cursor-pointer flex justify-center items-center rounded-xl px-2 duration-200 hover:scale-110">
              <UserPlus className="w-4 h-4 mr-2" />
              Sign Up
            </button>
            {/* <Button
                  size="sm"
                  onClick={() => setAuthMode("signup")}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Button> */}
          </div>
        )}
      </div>
    </div>
  );
}
