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
  const handleReverse = () => {
    let reverseText = text.split("").reverse().join("");
    setText(reverseText);
  };
  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold">{heading}</h1>
        <div className="mb-0 flex justify-center text-center">
          <textarea
            className="md:w-[60vw] w-[80vw] outline-none border-2 my-3"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="flex-wrap">
          <button
            onClick={handleUpCase}
            className="btn mx-3 bg-purple-500 text-white text-lg"
          >
            UPPERCASE
          </button>
          <button
            onClick={handleLoCase}
            className="btn bg-purple-500 text-white text-lg"
          >
            lowercase
          </button>
          <button
            onClick={handleCopy}
            className="btn mx-3 bg-purple-500 text-white text-lg"
          >
            Copy text
          </button>
          <button
            onClick={handleReverse}
            className=" my-3 btn bg-purple-500 text-white text-lg"
          >
            Reverse Text
          </button>
        </div>

        <h3 className="my-3 text-xl">Text Summary</h3>
        <p>
          Number of word <b>{text.trim().split(" ").length}</b> number of
          Charactor <b>{text.length}</b>
        </p>
        <p>Time to read this text {text.trim().split(" ").length * 0.008}</p>
      </div>
    </>
  );
}

export default TextArea;
