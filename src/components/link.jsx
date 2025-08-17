import { BarChart3, Calendar, Globe, Key, Link2 } from "lucide-react";
import { useState } from "react";

export default function Link() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [advancedOptions, setAdvancedOptions] = useState({
    customAlias: "",
    expirationDate: "",
    password: "",
    trackClicks: true,
  });
  // return (
  //   <div className="backgroundSearch relative w-[80%] top-16  items-center justify-between p-10 rounded-xl flex gap-5 mx-auto">
  //     <input
  //       type="text"
  //       placeholder="Shorten a link here..."
  //       className="bg-white outline-none rounded-xl w-[90%] h-15 px-4 py-4"
  //     />
  //     <button className="bg-primary-blue rounded-xl text-white h-15 w-[20%] text-xl px-4 py-2">
  //       Shorten It!
  //     </button>
  //   </div>
  // );

  return (
    <div className="max-w-3xl mx-auto shadow-2xl backgroundSearch flex flex-col gap-6 rounded-xl py-6">
      <div className="p-8 px-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <input
              type="url"
              placeholder="Paste your long URL here..."
              className="h-14 text-lg pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 flex w-full min-w-0 rounded-md border  px-3 py-1  shadow-xs outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-smy"
              onKeyPress={(e) => e.key === "Enter" && handleShorten()}
            />
            <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
          </div>

          {/* <Button
            onClick={handleShorten}
            disabled={isLoading}
            className="h-14 px-8 font-bold text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Processing...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                Shorten URL
                <ArrowRight className="w-5 h-5" />
              </div>
            )}
          </Button> */}
          
          <button className="h-14 px-8 font-bold text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Processing...
          </button>
        </div>

        <div className="border-t border-white/10 pt-4">
          {/* <Button
            variant="ghost"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="w-full flex items-center justify-center gap-2 text-purple-200 hover:text-white hover:bg-white/5"
          >
            <Settings className="w-4 h-4" />
            Advanced Options
            {showAdvanced ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button> */}

          <button className="w-full flex items-center justify-center gap-2 text-purple-200 hover:text-white hover:bg-white/5">
            Advanced Options
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              showAdvanced ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4 space-y-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Custom alias (optional)"
                    value={advancedOptions.customAlias}
                    onChange={(e) =>
                      setAdvancedOptions((prev) => ({
                        ...prev,
                        customAlias: e.target.value,
                      }))
                    }
                    className="h-12 pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                </div>

                <div className="relative">
                  <input
                    type="datetime-local"
                    onChange={(e) =>
                      setAdvancedOptions((prev) => ({
                        ...prev,
                        expirationDate: e.target.value,
                      }))
                    }
                    className="h-12 pl-10 bg-white/10 border-white/20 text-white"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                </div>
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password protection (optional)"
                  value={advancedOptions.password}
                  onChange={(e) =>
                    setAdvancedOptions((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="h-12 pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              </div>

              <div className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  id="trackClicks"
                  checked={advancedOptions.trackClicks}
                  onChange={(e) =>
                    setAdvancedOptions((prev) => ({
                      ...prev,
                      trackClicks: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 rounded border-white/20 bg-white/10"
                />
                <label
                  htmlFor="trackClicks"
                  className="text-purple-200 flex items-center gap-2"
                >
                  <BarChart3 className="w-4 h-4" />
                  Enable click tracking
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
