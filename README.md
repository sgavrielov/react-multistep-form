# React Multistep Form

## How To Embed The "React Multistep Form" In Your Own Project

In your components folder create another folder that is going to hold all the multistep form information.

In our example we are using 'newStartup', you can give any name to the component.

### Steps

1. Copy the useMultistepForm.js to your hooks folder.
2. Import the useMultistepForm.js in the parent component that you created.
3. Create `INITIAL_DATA` variable outside from the parent component but still inside the file itself.
   - This variable will hold all our "inputs'" data.
   - **Don't forget to add key:value when you're adding new input field.**
   - By default it's better to give the `value` empty string.
4. **To each step don't forget to give class `step`, you also can give custom class name.**

**You can see all the steps below**

> **Do not delete the the `multistepForm` class**

```js
import { useState } from "react"; // we are saving all our inputs data in the state
import { useMultistepForm } from "../../hooks/useMultistepForm"; // step 2
// all the steps will be inside the useMultistepForm
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

// step 3
const INITIAL_DATA = {
  startupName: "",
  startupDescription: "",
  startupStrategy: "",
};

// parent component
function NewStartup({ open, setOpen }) {
  // this function keeps tracking our inputs fileds
  // if you create new steps don't forget to pass it also
  // you can see the example below
  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const [data, setData] = useState(INITIAL_DATA); // storing all inputs data

  // useMultistepForm require array as parameter.
  // the array is our steps
  const { step, isFirstStep, back, next, isLastStep, goTo } = useMultistepForm([
    <Step1 {...data} updateFields={updateFields} />,
    <Step2 {...data} updateFields={updateFields} goTo={() => goTo(0)} />,
    <Step3
      {...data}
      updateFields={updateFields}
      goToName={() => goTo(0)}
      goToDescription={() => goTo(1)}
    />,
  ]);

  // from this function you can send your inputs data to database or whatever you want to do with your data
  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Success");
    close();
  };

  // this function will close the multistep form
  // setOpen located in App.js file
  const close = () => setOpen(!open);

  return (
    // Do not delete the multistepForm class name
    <div className='multistepForm newStartup'>
      {/* all the steps must be inside the form */}
      <form onSubmit={onSubmit}>
        {/* button that closes the multistepForm */}
        <button type='button' className='closeMultistepFormBtn' onClick={close}>
          <svg viewBox='0 0 24 24'>
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        </button>

        {/* showing the current step */}
        {step}

        <div className='options'>
          {/* The back button will only appear if the user passed the first step */}
          {/* you can remove the condition as you wish, and also show the back button in the first step */}
          {!isFirstStep && (
            <button type='button' onClick={back}>
              Back
            </button>
          )}
          {/* text of the button changes by the steps */}
          {/* if the user is on the last step the text will be "finish" insted "next" */}
          <button>{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default NewStartup;
```

```css
.multistepForm {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
}

.multistepForm svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.multistepForm form {
  position: relative;
  width: 50%;
  height: auto;
  padding: 3rem 5rem;
  min-height: 150px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -7px rgba(0, 0, 0, 0.07);
}

.multistepForm form .closeMultistepFormBtn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.multistepForm form .step {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  animation: slide 500ms linear;
}

@keyframes slide {
  from {
    transform: translate(0px, 0);
  }
  50% {
    transform: translate(20px, 0);
  }
  to {
    transform: translate(-0px, 0);
  }
}
```

Feel free to contribute and to improve.
