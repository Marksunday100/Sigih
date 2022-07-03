import { useState } from "react";
import "../App.css";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <div className="inputText">
        <h1>
          URL <span>Shortener</span>
        </h1>
      </div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br></br>
        <button className="inputBut" onClick={handleClick}>
          Shorten
        </button>
      </div>
    </div>
  );
};

export default InputShortener;
