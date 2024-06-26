import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading title="Chat Smarter, Not Harder with Brainwave" className="max-w-md lg:max-w-2xl" />

        {/* Card */}
        <div className="flex flex-wrap gap-10 justify-center mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-[20rem] lg:max-w-[24rem]"
              style={{
                //Border-ClipPath
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              {/* Content */}
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img src={item.iconUrl} alt={item.title} width={48} height={48} />
                  <p className="ml-auto text-xs text-n-1 font-code font-bold uppercase tracking-wider transition-transform hover:translate-x-5">Explore more</p>
                  <Arrow />
                </div>
              </div>
              {/* Black Gradient */}
              {item.light && <GradientLight />}
              {/* ClipPath */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{
                  clipPath: "url(#benefits)",
                }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">{item.imageUrl && <img src={item.imageUrl} alt={item.title} width={380} height={362} className="w-full h-full object-cover" />}</div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
