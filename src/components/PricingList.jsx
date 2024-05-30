import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex max-lg:flex-wrap gap-[1rem]">
      {pricing.map((item) => (
        <div key={item.id} className="w-[19rem] max-lg:w-full lg:w-auto h-full border border-n-6 rounded-[2rem] px-6 even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 text-n-1/50 min-h-[4rem] mb-3">{item.description}</p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] font-bold leading-none">{item.price}</div>
              </>
            )}
          </div>

          <Button href={item.price ? "/pricing" : "andryariadi@dev.com"} white={!!item.price} className="w-full mb-6">
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feat, index) => (
              <li key={index} className="flex items-center py-5 border-t border-n-6">
                <img src={check} alt="Check" width={24} height={24} />
                <p className="body-2 ml-4">{feat}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
