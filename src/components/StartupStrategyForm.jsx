import React from "react";

const StartupStrategyForm = ({
  startupName,
  startupDescription,
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
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
      </div>
    </div>
  );
};

export default StartupStrategyForm;
