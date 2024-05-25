import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="bg-rose-500 pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
