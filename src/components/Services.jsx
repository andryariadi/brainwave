import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="Generating AI made for creators." text="Brainwave unlocks the pontetial of AI-powered applications" />

        {/* Bento Grid */}
        <div className="relative">
          {/* Top */}
          <div className="relative z-1 flex items-center h-[39rem] xl:h-[46rem] mb-5 p-8 lg:p-20 border border-n-1/10 rounded-3xl overflow-hidden transition-colors duration-500 ease-in-out hover:border-color-1">
            {/* Left */}
            <div className="absolute top-0 left-0 h-full w-full md:w-3/5 xl:w-auto pointer-events-none">
              <img src={service1} alt="Smartest AI" width={800} height={730} className="w-full h-full object-cover md:object-right" />
            </div>

            {/* Right */}
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">Brainwave unlocks the potential of AI-powered applications</p>
              <ul>
                {brainwaveServices.map((item, index) => (
                  <li key={index} className="flex items-start py-4 border-t border-n-6">
                    <img src={check} alt="Check" width={24} height={24} />
                    <p className="body-2 ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 border border-n-1/10 md:w-[40rem]" />
          </div>

          {/* Bottom */}
          <div className="relative z-1 grid lg:grid-cols-2 gap-5">
            {/* Left */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden transition-colors duration-500 ease-in-out hover:border-color-1">
              <div className="absolute inset-0">
                <img src={service2} alt="Robot" width={630} height={750} className="w-full h-full object-cover" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15 bg-gradient-to-b from-n-8/0 to-n-8/90">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now!</p>
              </div>

              <PhotoChatMessage />
            </div>

            {/* Right */}
            <div className="bg-n-7 p-4 rounded-3xl overflow-hidden lg:min-h-[46rem] border transition-colors duration-500 ease-in-out hover:border-color-1">
              {/* Top */}
              <div className="py-12 px-4 lg:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 text-n-3 mb-[2rem]">The world’s most powerful AI photo and video art generation engine. What will you create?</p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li key={index} className={`rounded-2xl flex items-center justify-center ${index === 2 ? "bg-conic-gradient w-[3rem] h-[3rem] md:w-[4.5rem] md:h-[4.5rem] p-0.25" : "bg-n-6 flex w-10 h-10 md:w-15 md:h-15"}`}>
                      <div className={index === 2 ? "bg-n-7 flex items-center justify-center w-full h-full rounded-[1rem]" : ""}>
                        <img src={item} alt={item} width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom */}
              <div className="bg-n-8 relative h-[20rem] md:h-[25rem] rounded-xl overflow-hidden">
                <img src={service3} alt="Scary Robot" width={520} height={400} className="w-full h-full object-cover" />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
