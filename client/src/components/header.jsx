import Illustration from "../assets/svg/illustration-working.svg";

export default function Header() {
  return (
    <div className="flex gap-10 px-30 min-h-screen justify-between items-center">
      <div className="w-[55%]  space-y-14">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-800 to-white bg-clip-text text-transparent">
            Shorten URLs
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Like Never Before
          </span>
        </h2>

        <div className="text-neutral-gray500 text-xl  ">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </div>
        <div className="text-white bg-gradient-to-r  from-purple-500 to-pink-500 w-fit rounded-full py-2 cursor-pointer duration-200 hover:scale-110 px-6 ">
          Get Started
        </div>
      </div>
      <div className=" w-[45%] ">
        <img src={Illustration} alt="Illustration" />
      </div>
    </div>
  );
}
