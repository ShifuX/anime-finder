const Button = ({ text, onSearch }) => {
  return (
    <button className="bttn" id="input-bttn" onClick={onSearch}>
      {text}
    </button>
  );
};

export default Button;
