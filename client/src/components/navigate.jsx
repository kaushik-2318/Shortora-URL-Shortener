import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Navigate() {
  const [pass, setPass] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [userPass, setUserPass] = useState("");
  const url = window.location.pathname;
  const pathSegment = url.split("/")[1];

  useEffect(() => {
    axios
      .get(`https://shortora-backend.vercel.app/getLink/${pathSegment}`)
      .then((response) => {
        const data = response.data;
        setPass(data.pass);
        setNewUrl(data.url);
      })
      .catch((error) => {
        console.error("Error fetching link:", error);
      });
  }, [pathSegment]);

  if (pass) {
    return (
      <div className="flex h-screen w-full justify-center bg-slate-800 items-center">
        <div className="text-black bg-gray-400 rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-4">Password Protected Link</h1>
          <p className="text-lg mb-4">
            Please enter the password to access the link:
          </p>
          <div className="flex gap-5  ">
            <input
              type="password"
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
              className="h-12 pl-3 bg-white/10 border-white/20 placeholder:text-white/60 outline-none rounded-xl text-sm w-full"
            />
            <button
              className="h-12 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer"
              onClick={() => {
                if (userPass === pass) {
                  window.location.href = newUrl;
                } else {
                  alert("Incorrect password");
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
