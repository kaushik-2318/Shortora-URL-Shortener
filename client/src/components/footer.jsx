import logo from "../assets/svg/logo-white.svg";

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
        </div>
      </div>
      <div>
        <div className="text-center  text-white py-5 bg-[#232027]">
  
        </div>
      </div>
    </>
  );
}
