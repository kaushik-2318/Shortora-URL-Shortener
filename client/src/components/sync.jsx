import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";

export default function SyncUser() {
  const { user, isSignedIn } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    const syncUser = async () => {
      if (isSignedIn && user) {
        try {
          const token = await getToken();
          await axios.post(
            "https://shortora-backend.vercel.app/auth/sync",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        } catch (err) {
          console.error("Sync failed:", err);
        }
      }
    };

    syncUser();
  }, [isSignedIn, user, getToken]);

  return null;
}
