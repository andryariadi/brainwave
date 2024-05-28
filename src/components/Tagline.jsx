import brackets from "../assets/svg/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div className={`bg-violet-800 tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="text-n-3 mx-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
