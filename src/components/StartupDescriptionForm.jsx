import React from "react";

const StartupDescriptionForm = ({
  startupDescription,
  updateFields,
  startupName,
}) => {
  return (
    <div className='startupDescriptionForm'>
      <h3>{startupName}</h3>

      <textarea
        name=''
        placeholder='Briefly describe your product or service'
        autoFocus
        required
        value={startupDescription}
        onChange={(e) => updateFields({ startupDescription: e.target.value })}
      ></textarea>
    </div>
  );
};

export default StartupDescriptionForm;
