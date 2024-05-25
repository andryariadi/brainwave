import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <div className="bg-rose-500 pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button>Something</Button>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ButtonGradient />
    </>
  );
};

export default App;
