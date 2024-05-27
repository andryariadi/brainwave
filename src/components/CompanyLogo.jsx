import { companyLogos } from "../constants";

const CompanyLogo = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline text-center text-n-1/50 mb-6">Helping people create beautiful content at</h5>

      <ul className="bg-teal-500 flex">
        {companyLogos.map((logo, index) => (
          <li key={index} className="bg-rose-500 flex flex-1 h-[8.5rem] justify-center items-center">
            <img src={logo} alt={logo} width={120} height={40} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogo;
