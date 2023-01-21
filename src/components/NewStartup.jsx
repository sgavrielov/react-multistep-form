import { useState } from "react";
import { useMultisteapForm } from "../hooks/useMultisteapForm";
import StartNameForm from "./StartNameForm";
import StartupDescriptionForm from "./StartupDescriptionForm";
import StartupStrategyForm from "./StartupStrategyForm";

const INITIAL_DATA = {
  startupName: "",
  startupDescription: "",
  startupStrategy: "",
};

const NewStartup = () => {
  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const [data, setData] = useState(INITIAL_DATA);
  const { step, isFirstStep, back, next, isLastStep } = useMultisteapForm([
    <StartNameForm {...data} updateFields={updateFields} />,
    <StartupDescriptionForm {...data} updateFields={updateFields} />,
    <StartupStrategyForm {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Success");
  };

  return (
    <div className='newStartup'>
      <form onSubmit={onSubmit}>
        {step}
        <div className='options'>
          {!isFirstStep && (
            <button type='button' onClick={back}>
              Back
            </button>
          )}
          <button>{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};

export default NewStartup;
