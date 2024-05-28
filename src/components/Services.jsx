import { check, service1, service2 } from "../assets";
import { brainwaveServices } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import { PhotoChatMessage } from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use" className="border-2 border-amber-500">
      <div className="bg-rose-500 container">
        <Heading title="Generating AI made for creators." text="Brainwave unlocks the pontetial of AI-powered applications" />

        <div className="bg-teal-500 relative">
          <div className="bg-violet-600 relative z-1 flex items-center h-[39rem] xl:h-[46rem] mb-5 p-8 lg:p-20 border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="bg-gray-600 absolute top-0 left-0 h-full w-full md:w-3/5 xl:w-auto pointer-events-none">
              <img src={service1} alt="Smartest AI" width={800} height={730} className="w-full h-full object-cover md:object-right" />
            </div>

            <div className="bg-amber-500 relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">Brainwave unlocks the potential of AI-powered applications</p>
              <ul className="bg-sky-600">
                {brainwaveServices.map((item, index) => (
                  <li key={index} className="bg-teal-700 flex items-start py-4 border-t border-n-6">
                    <img src={check} alt="Check" width={24} height={24} />
                    <p className="body-2 ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 border border-n-1/10 md:w-[40rem]" />
          </div>

          <div className="bg-amber-600 relative z-1 grid lg:grid-cols-2 gap-5">
            <div className="bg-teal-800 relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="bg-sky-500 absolute inset-0">
                <img src={service2} alt="Robot" width={630} height={750} className="w-full h-full object-cover" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15 bg-gradient-to-b from-n-8/0 to-n-8/90">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now!</p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="bg-violet-500 relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden grid lg:grid-rows-2 gap-3">
              <div className="bg-gray-500">Andry</div>
              <div className="bg-green-500">Ariadi</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
