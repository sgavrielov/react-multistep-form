const StartupDescriptionForm = ({
  startupDescription,
  updateFields,
  startupName,
  goTo,
}) => {
  return (
    <div className='startupDescriptionForm'>
      <h3 onClick={goTo}>{startupName}</h3>

      <textarea
        name='startupDescription'
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
