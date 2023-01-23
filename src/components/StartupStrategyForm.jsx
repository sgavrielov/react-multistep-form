import React from "react";

const StartupStrategyForm = ({
  startupName,
  startupDescription,
  startupStrategy,
  updateFields,
  goToName,
  goToDescription,
}) => {
  return (
    <div className='startupStrategy'>
      <div className='startupStrategy-startupName' onClick={goToName}>
        {startupName}
      </div>

      <div className='startupStrategy-description' onClick={goToDescription}>
        {startupDescription}
      </div>

      <div className='ai-info'>
        <h3>Main success factor</h3>

        <p>
          Our AI has determined your business model's main success
          <br />
          factor based on your description.
          <br />
          You can keep this suggestion or change it if you disagree.
        </p>
      </div>

      <div className='stragey-options'>
        <span
          onClick={() => updateFields({ startupStrategy: "Invested Capital" })}
        >
          Invested Capital
        </span>
        <span onClick={() => updateFields({ startupStrategy: "Option 2" })}>
          Option 2
        </span>
        <span onClick={() => updateFields({ startupStrategy: "Option 3" })}>
          Option 3
        </span>
      </div>
    </div>
  );
};

export default StartupStrategyForm;
