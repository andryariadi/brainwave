import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { useState } from "react";
import { HambugerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    toggleNavigation();
  };

  //   console.log(pathName, "<---diheader");

  return (
    <>
      <div className={`w-full fixed top-0 left-0 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          {/* Left */}
          <a href="#hero" className="block w-[12rem] xl:mr-8 transition-transform duration-500 ease-in-out hover:scale-110">
            <img src={brainwave} alt="Brainwave" width={190} height={40} />
          </a>
          {/* Center */}
          <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
            <div className="relative z-2 flex flex-col lg:flex-row items-center justify-center mx-auto">
              {navigation.map((item) => (
                <a
                  href={item.url}
                  key={item.id}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile && "lg:hidden"} px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathName.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HambugerMenu />
          </nav>
          {/* Right */}
          <a href="#signup" className="button hidden lg:block mr-8 text-n-1/50 transition-colors hover:text-n-1">
            New Account
          </a>

          <Button href="#login" className="hidden lg:flex">
            Sign In
          </Button>

          <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
