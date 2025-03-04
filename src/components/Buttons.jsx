const Buttons = ({ values, buttonClicked }) => {
  return (
    <div className="buttons-container">
      {values.map((value) => (
        <button
          key={value}
          className="calc-keys"
          onClick={() => buttonClicked(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
