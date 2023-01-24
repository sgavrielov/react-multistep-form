import { useState } from "react";
import NewStartup from "./components/NewStartup";

const App = () => {
  const [toggleNewStartup, setToggleNewStartup] = useState(false);

  return (
    <>
      <button
        onClick={() => setToggleNewStartup(!toggleNewStartup)}
        className='btn-toggle-multistep-from'
      >
        new startup
      </button>
      {toggleNewStartup && (
        <NewStartup open={toggleNewStartup} setOpen={setToggleNewStartup} />
      )}
    </>
  );
};

export default App;
