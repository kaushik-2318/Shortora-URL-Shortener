import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Navigate() {
  const { alias } = useParams();
  const [newUrl, setNewUrl] = useState("");
  const [hasPass, setHasPass] = useState(false);
  const [userPass, setUserPass] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://shortora-backend.vercel.app/getLink/${alias}`)
      .then((res) => {
        setHasPass(!!res.data.pass);
        setLoading(false);
        if (!res.data.pass) setNewUrl(res.data.url);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [alias]);

  useEffect(() => {
    if (newUrl && !hasPass) {
      window.location.href = newUrl;
    }
  }, [newUrl, hasPass]);

  if (loading) return <p className="text-white">Loading...</p>;

  if (hasPass) {
    return (
      <div className="flex h-screen w-full justify-center bg-slate-800 items-center">
        <div className="text-black bg-gray-400 rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-4">Password Protected Link</h1>
          <p className="text-lg mb-4">Please enter the password:</p>
          <div className="flex gap-5">
            <input
              type="password"
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
              className="h-12 pl-3 bg-white/10 border-white/20 outline-none rounded-xl text-sm w-full"
            />
            <button
              className="h-12 px-6 bg-purple-600 text-white rounded-lg"
              onClick={async () => {
                try {
                  const res = await axios.post(
                    `https://shortora-backend.vercel.app/verify/${alias}`,
                    { userPass }
                  );
                  window.location.href = res.data.url;
                } catch {
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
  }

  return null;
}
