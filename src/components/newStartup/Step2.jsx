import React from "react";

function Step2({ startupDescription, updateFields, startupName, goTo }) {
  return (
    <div className='step startupDescription'>
      <h3 onClick={goTo} className='previous-input'>
        {startupName}
      </h3>

      <textarea
        name='startupDescription'
        placeholder='Briefly describe your product or service'
        autoFocus
        value={startupDescription}
        onChange={(e) => updateFields({ startupDescription: e.target.value })}
      ></textarea>
    </div>
  );
}

export default Step2;
