import Illustration from "../assets/svg/illustration-working.svg";

export default function Header() {
  return (
    <div className="flex  gap-10 px-30 min-h-screen justify-between items-center">
      <div className="w-[55%]  space-y-14">
        <div className="font-extrabold text-neutral-gray900 text-7xl ">
          More than just shorter links
        </div>
        <div className="text-neutral-gray500 text-xl  ">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </div>
        <div className="text-white bg-primary-blue w-fit rounded-full py-1 px-6 ">
          Get Started
        </div>
      </div>
      <div className=" w-[45%] ">
        <img src={Illustration} alt="Illustration" />
      </div>
    </div>
  );
}
