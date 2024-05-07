import React, { useState } from "react";
import "../assets/styles/TextArea.css";

function TextArea({ heading }) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    const newtext = e.target.value;
    setText(newtext);
  };
  const handleUpCase = () => {
    setText(text.toUpperCase());
  };
  const handleLoCase = () => {
    setText(text.toLowerCase());
  };
  const handleCopy = () => {
    window.navigator.clipboard.writeText(text);
  };
  return (
    <>
      <div>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button onClick={handleUpCase} className="btn mx-3 btn-primary">
          UPPERCASE
        </button>
        <button onClick={handleLoCase} className="btn btn-primary">
          lowercase
        </button>
        <button onClick={handleCopy} className="btn mx-3 btn-primary">
          Copy text
        </button>
        <h3 className="my-3">Text Summary</h3>
        <p>
          Number of word {text.trim().split(" ").length} number of Charactor{" "}
          {text.length}
        </p>
        <p>Time to read this text {text.trim().split(" ").length * 0.008}</p>
      </div>
    </>
  );
}

export default TextArea;
