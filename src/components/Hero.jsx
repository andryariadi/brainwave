import { useRef } from "react";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogo from "./CompanyLogo";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section id="#hero" className="pt-[12rem] -mt-[5.25rem] border-4 border-red-700" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings>
      <div className="bg-teal-500 container relative border-4 border-green-700" ref={parallaxRef}>
        <div className="bg-sky-500 relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
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
                <img src={robot} alt="AI" className="w-full scale-[1.7] md:scale-[1] translate-y-[8%] md:-translate-y-[10%] lg:-translate-y-[23%]" width={1024} height={490} />

                <Generating className="absolute left-4 md:left-1/2 right-4 md:right-auto bottom-5 md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden xl:flex absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl">
                    {heroIcons.map((icon, index) => (
                      <li key={index} className="p-5">
                        <img src={icon} alt={icon} width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" title="Code generating" />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <div className="bg-rose-500 absolute -top-[54%] lg:-top-[104%] md:-top-[46%] left-1/2 -translate-x-1/2 w-[234%] md:w-[138%]">
            <img src={heroBackground} alt="Hero" className="w-full" width={1440} height={1800} />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogo className="hidden lg:block relative z-10 mt-20" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
