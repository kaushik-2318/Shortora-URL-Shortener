import logo from "../assets/svg/logo.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between z-50 fixed px-30 w-full py-7 backdrop-blur-lg items-center text-neutral-gray500">
      <div>
        <ul className="flex flex-row gap-15">
          <li>
            <img src={logo} alt="Logo" />
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row items-center justify-center gap-10">
          <li>Login</li>
          <li className="bg-primary-blue text-white py-1 px-5 rounded-full">
            Sign Up
          </li>
        </ul>
      </div>
    </div>
  );
}
