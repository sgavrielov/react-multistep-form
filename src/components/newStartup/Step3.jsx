import React from "react";
import AiInfo from "./AiInfo";

function Step3({
  startupName,
  startupDescription,
  startupStrategy,
  updateFields,
  goToName,
  goToDescription,
}) {
  return (
    <div className='step startupStrategy'>
      <div className='previous-input' onClick={goToName}>
        {startupName}
      </div>

      {startupDescription && (
        <div className='previous-input description' onClick={goToDescription}>
          {startupDescription}
        </div>
      )}

      <AiInfo />

      <div className='stragey-options'>
        <span
          className={startupStrategy === "Invested Capital" && "checked"}
          onClick={() => updateFields({ startupStrategy: "Invested Capital" })}
        >
          Invested Capital
        </span>
        <span
          className={startupStrategy === "Option 2" && "checked"}
          onClick={() => updateFields({ startupStrategy: "Option 2" })}
        >
          Option 2
        </span>
        <span
          className={startupStrategy === "Option 3" && "checked"}
          onClick={() => updateFields({ startupStrategy: "Option 3" })}
        >
          Option 3
        </span>
      </div>
    </div>
  );
}

export default Step3;
