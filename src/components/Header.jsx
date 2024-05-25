import { brainwave } from "../assets";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 z-50 bg-amber-500 backdrop-blur-sm border-b border-n-6">
        <div className="bg-teal-500 flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a href="#hero" className="block w-[12rem] xl:mr-8">
            <img src={brainwave} alt="Brainwave" width={190} height={40} />
          </a>

          <nav className="hidden fixed left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
            <div className="bg-sky-500 relative z-2 flex flex-col lg:flex-row items-center justify-center mx-auto">
              <div>Andry</div>
              <div>Andry</div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
