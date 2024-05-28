import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses className="border-2 border-sky-500">
      <div className="bg-amber-500 container md:flex md:gap-3">
        <div className="bg-teal-500 max-w-[23rem]">
          <h2 className="h2 mb-4 md:mb-8">AI Chat for seamless collaboration</h2>
          <ul className="bg-violet-500 max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} alt="Check" width={24} height={24} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>

                {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>

        <div className="bg-sky-500 lg:ml-auto xl:w-[38rem] mt-4">
          <p className="bg-violet-300 body-2 text-n-4 mb-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">{collabText}</p>
          <div className="bg-violet-500 relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 border border-n-6 aspect-square rounded-full m-auto">
              <div className="w-[6rem] border border-n-6 aspect-square rounded-full m-auto p-[0.2rem] bg-conic-gradient">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img src={brainwaveSymbol} alt="Brainwave" width={48} height={48} />
                </div>
              </div>
            </div>

            <ul className="bg-amber-500">
              {collabApps.map((app, index) => (
                <li key={app.id} className={`bg-teal-800 absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                  <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 rounded-xl border border-n-1/15 -rotate-${index * 45}`}>
                    <img src={app.icon} alt={app.title} width={app.width} height={app.height} className="m-auto" />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
