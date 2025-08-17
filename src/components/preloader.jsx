import { Link } from "lucide-react";

export default function Preloader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full  blur-3xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full  blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full  blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="text-center z-10">
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/25 border border-white/10 animate-pulse mx-auto">
            <div className="relative">
              <Link className="w-12 h-12 text-white" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-400 to-pink-900 bg-clip-text text-transparent mb-4 animate-fade-in-up">
          Shortora
        </h1>
        <p className="text-white text-lg animate-fade-in-up animation-delay-500">
          Initializing advanced URL management...
        </p>

        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
