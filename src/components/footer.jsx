import logo from "../assets/svg/logo-white.svg";
import facebook from "../assets/svg/icon-facebook.svg";
import instagram from "../assets/svg/icon-instagram.svg";
import twitter from "../assets/svg/icon-twitter.svg";

export default function Footer() {
  return (
    <div>
      <div className="background">
        <div className="flex justify-center  px-30 items-center flex-col space-y-7 py-10 ">
          <div className="text-white text-4xl font-bold">
            Boost your links today
          </div>
          <button className="bg-primary-blue text-white py-2 px-8 rounded-full">
            Get Started
          </button>
        </div>
      </div>

      <div className="bg-[#232027] text-white py-20 pb-10 flex justify-between items-start px-30">
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
            <div>
              <img src={facebook} alt="Facebook" />
            </div>
            <div>
              <img src={instagram} alt="Instagram" />
            </div>
            <div>
              <img src={twitter} alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
