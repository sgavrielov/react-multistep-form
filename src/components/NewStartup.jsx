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

const NewStartup = ({ open, setOpen }) => {
  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const [data, setData] = useState(INITIAL_DATA);
  const { step, isFirstStep, back, next, isLastStep, goTo } = useMultisteapForm(
    [
      <StartNameForm {...data} updateFields={updateFields} />,
      <StartupDescriptionForm
        {...data}
        updateFields={updateFields}
        goTo={() => goTo(0)}
      />,
      <StartupStrategyForm
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
    alert(
      `Success,
      ${data.startupName},
        ${data.startupDescription},
          ${data.startupStrategy}`
    );
  };

  const close = () => {
    setOpen(!open);
  };

  return (
    <div className='newStartup'>
      <form onSubmit={onSubmit}>
        <span className='close-btn' onClick={close}>
          <svg viewBox='0 0 24 24'>
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        </span>
        {step}
        <div className='options'>
          {data.startupName && isFirstStep && (
            <button className='btn-finish'>Finish</button>
          )}
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
