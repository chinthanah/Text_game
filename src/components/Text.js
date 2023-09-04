import React, { useState } from "react";

export default function Text(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("enter text here");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-5">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-dark" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-dark mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-dark mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>

      <div className="count">
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
