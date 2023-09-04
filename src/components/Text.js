import React, { useState } from "react";

export default function Text(props) {
  const handleUpClick = () => {
    console.log("Uppercase button clicked" + text);
    let newText = text.toUpperCase();
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
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>

      <div className="count">
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
      </div>
    </>
  );
}
