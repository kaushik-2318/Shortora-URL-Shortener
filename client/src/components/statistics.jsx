import brand from "../assets/svg/icon-brand-recognition.svg";
import detailed from "../assets/svg/icon-detailed-records.svg";
import customizable from "../assets/svg/icon-fully-customizable.svg";

export default function Statistics() {
  return (
    <div className="px-30 flex items-center gap-8 pt-40 justify-center flex-col ">
      <h1 className="text-4xl font-bold text-white ">Advanced Statistics</h1>
      <p className="text-neutral-gray500 text-center max-w-[500px]">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="flex justify-between items-center mt-15 flex-col lg:flex-row">
        {Data.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center justify-center flex-col lg:flex-row ${offsets[index]}`}
          >
            <Card {...stat} />
            {index < Data.length - 1 && (
              <div className="w-[10px] h-[50px] bg-primary-blue lg:w-[50px] lg:h-[10px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const Card = ({ title, description, image }) => {
  return (
    <>
      <div className="max-w-[350px]  flex justify-start relative items-center  flex-col gap-5 min-h-[270px] hover:scale-105  p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-purple-400/30 transition-all duration-300">
        <div className=" rounded-full -top-10 left-10 lg:absolute     w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500  ">
          <img src={image.src} alt={image.alt} className="p-4" />
        </div>
        <div className="space-y-3 mt-10">
          <h1 className="text-xl font-bold text-white">{title}</h1>
          <p className="text-justify text-purple-200/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

const Data = [
  {
    title: "Link Shortening",
    description: "Easily shorten your links with our simple API.",
    image: { src: brand, alt: "Link Shortening" },
  },
  {
    title: "Custom Domains",
    description: "Use your own domain for shortened links.",
    image: { src: customizable, alt: "Custom Domains" },
  },
  {
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    image: { src: detailed, alt: "Detailed Records" },
  },
];

const offsets = [
  "lg:translate-y-[0px]",
  "lg:translate-y-[30px]",
  "lg:translate-y-[60px]",
  "lg:translate-y-[90px]",
];
