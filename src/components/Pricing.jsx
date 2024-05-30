import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section id="pricing">
      <div className="container relative z-2">
        {/* Top */}
        <div className="relative hidden lg:flex justify-center mb-[6.5rem]">
          <img src={smallSphere} alt="Sphere" width={255} height={255} className="relative z-1" />

          <div className="w-[60rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={stars} alt="Start" width={950} height={400} className="w-full" />
          </div>
        </div>

        <Heading tag="Get started with Brainwave" title="Pay once, use forever" />

        {/* Bottom */}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        {/* <div className="flex justify-center mt-10">
          <a href="/pricing" className="text-xs font-code font-bold uppercase tracking-wider border-b">
            See the full details
          </a>
        </div> */}
      </div>
    </Section>
  );
};

export default Pricing;
