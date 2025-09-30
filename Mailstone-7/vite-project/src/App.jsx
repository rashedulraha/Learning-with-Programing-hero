import "./App.css";
import ControlledField from "./component/controlledField/controlledField";
import FormAction from "./component/fromAction/FormAction";

const App = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold bg-white text-green-500 p-6 rounded-md cursor-pointer">
        Hello this is app Element
      </h1>
      {/* <FormAction /> */}
      <ControlledField />
    </div>
  );
};

export default App;
