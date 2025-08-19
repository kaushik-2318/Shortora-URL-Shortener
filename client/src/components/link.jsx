import axios from "axios";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Globe,
  Key,
  Link2,
  Settings,
} from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";

export default function Link() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");
  const { getToken } = useAuth();
  const [newUrl, setNewUrl] = useState();
  const [complete, setComplete] = useState(false);
  const [copied, setCopied] = useState(false);

  const [advancedOptions, setAdvancedOptions] = useState({
    customAlias: "",
    expirationDate: "",
    password: "",
  });

  const handleShorten = async () => {
    if (!url.trim()) {
      alert("Please enter a valid URL");
      return;
    }

    try {
      new URL(url);
    } catch {
      alert("Please enter a valid URL");
      return;
    }

    setIsLoading(true);

    const customAlias = advancedOptions.customAlias.trim();
    const shortCode = customAlias || Math.random().toString(36).substr(2, 6);

    const newShortened = {
      originalUrl: url,
      shortUrl: `https://shortora.vercel.app/${shortCode}`,
      alias: customAlias || shortCode,
      password: advancedOptions.password.trim() || undefined,
    };

    const token = await getToken();

    await axios
      .post("http://localhost:3000/link", newShortened, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setNewUrl(res.data.link);
        setComplete(true);
      })
      .catch((error) => {
        console.error("Error shortening URL:", error);
      })
      .finally(() => {
        setUrl("");
        setAdvancedOptions({
          customAlias: "",
          password: "",
        });
        setShowAdvanced(false);
        setIsLoading(false);
      });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(newUrl);
    setCopied(true);
  };

  return (
    <div className="max-w-3xl mx-auto shadow-2xl backgroundSearch flex flex-col gap-6 rounded-xl pt-6">
      {complete ? (
        <>
          <div className="p-8 px-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Shortened URL
            </h2>
            <p className="text-lg text-white">
              Your shortened URL is:{" "}
              <a
                href={newUrl}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {newUrl}
              </a>
            </p>
            <div className="flex  gap-5">
              <button
                onClick={() => {
                  setComplete(false);
                  setNewUrl("");
                }}
                className="mt-4 px-6 py-2 cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Reset
              </button>

              <button
                onClick={handleCopy}
                className="mt-4 cursor-pointer px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                {copied ? <span>Copied!</span> : <span>Copy Link</span>}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="p-8 px-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your long URL here..."
                className="h-14 text-lg pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 flex w-full min-w-0 rounded-md border  px-3 py-1  shadow-xs outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-smy"
                onKeyPress={(e) => e.key === "Enter" && handleShorten()}
              />
              <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
            </div>

            <button
              onClick={handleShorten}
              disabled={isLoading}
              className="h-14 cursor-pointer duration-300 hover:scale-105 px-8 font-bold text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl disabled:cursor-not-allowed disabled:opacity-50"
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
            </button>
          </div>

          <div className="border-t  border-white/10 w-full  pt-4">
            <div className="w-full flex justify-center">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex px-4   duration-300 hover:bg-white/5 w-fit items-center justify-center gap-2  text-purple-200 hover:text-white rounded-full cursor-pointer py-2 "
              >
                <Settings className="w-4 h-4" />
                Advanced Options
                {showAdvanced ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

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
                      className="h-12 pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 outline-none rounded-xl text-sm w-full"
                    />
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
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
                      className="h-12 pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 outline-none rounded-xl text-sm w-full"
                    />
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
