import logo from "../assets/svg/logo-white.svg";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";

import twitter from "../assets/svg/icon-twitter.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-[#232027] w-full text-white py-10 mt-20 flex justify-between items-start px-30">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex justify-between items-start gap-20">
          <div className="space-y-7 ">
            <div className="text-2xl">Features</div>
            <ul className="space-y-4 text-sm text-neutral-gray500 tracking-wider">
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="space-y-7">
            <div className="text-2xl">Resources</div>
            <ul className="space-y-4 text-sm text-neutral-gray500 tracking-wider">
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="flex justify-center items-start gap-5">
            <a
              href="https://www.linkedin.com/in/kaushikverma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-7 h-7 mr-2 hover:scale-110 duration-200" />
            </a>
            <a
              href="https://www.instagram.com/kaushikverma.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-7 h-7 mr-2 hover:scale-110 duration-200" />
            </a>

            <a
              href="https://x.com/SilentK68296830"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-7 h-7 mr-2 hover:scale-110 duration-200" />
            </a>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="text-center  text-white py-5 bg-[#232027]">
          Made By{" "}
          <a
            href="https://kaushikverma.me/"
            className="underline"
            target="_blank"
          >
            Kaushik
          </a>{" "}
          with ❤️
        </div>
      </div> */}
    </>
  );
}
