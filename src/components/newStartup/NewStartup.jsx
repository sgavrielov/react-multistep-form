import { useState } from "react";
import { useMultisteapForm } from "../../hooks/useMultisteapForm";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const INITIAL_DATA = {
  startupName: "",
  startupDescription: "",
  startupStrategy: "",
};

function NewStartup({ open, setOpen }) {
  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const [data, setData] = useState(INITIAL_DATA);
  const { step, isFirstStep, back, next, isLastStep, goTo } = useMultisteapForm(
    [
      <Step1 {...data} updateFields={updateFields} />,
      <Step2 {...data} updateFields={updateFields} goTo={() => goTo(0)} />,
      <Step3
        {...data}
        updateFields={updateFields}
        goToName={() => goTo(0)}
        goToDescription={() => goTo(1)}
      />,
    ]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Success");
  };

  const close = () => setOpen(!open);

  return (
    <div className='multistepForm newStartup'>
      <form onSubmit={onSubmit}>
        <button type='button' className='closeMultistepFormBtn' onClick={close}>
          <svg viewBox='0 0 24 24'>
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        </button>

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
}

export default NewStartup;
