import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex max-sm:flex-col items-center justify-center md:justify-between gap-10">
        <p className="caption text-n-4 lg:block">© {new Date().getFullYear()} All rights reserved.</p>

        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a key={item.id} href={item.url} target="_blank" className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 duration-300">
              <img src={item.iconUrl} alt={item.title} width={16} height={16} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
