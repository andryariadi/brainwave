import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  return (
    <Section id="#hero" className="bg-rose-500 pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings>
      <div className="bg-teal-500 container relative">
        <div className="bg-sky-500 relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of AI Chatting with
            <span className="bg-rose-500 inline-block relative">
              Brainwave
              <img src={curve} alt="Curve" className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} />
            </span>
          </h1>

          <p className="bg-amber-500 body-1 max-w-3xl mx-auto mb-6 lg:mb-8 text-n-1">Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>

          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>

        <div className="bg-violet-500 relative max-w-[23rem] md:max-w-5xl mx-auto xl:mb-24">
          <div className="bg-amber-500 relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] md:aspect-[668/490] lg:aspect-[1024/490] overflow-hidden rounded-b-[0.9rem]">
                <img src={robot} alt="AI" className="w-full scale-[1.7] md:scale-[1] -translate-y-[8%] md:-translate-y-[10%] lg:-translate-y-[23%]" width={1024} height={490} />
              </div>
            </div>
          </div>

          <div className="bg-rose-500 absolute -top-[54%] lg:-top-[104%] md:-top-[46%] left-1/2 -translate-x-1/2 w-[234%] md:w-[138%]">
            <img src={heroBackground} alt="Hero" className="w-full" width={1440} height={1800} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
