import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Text from "./components/Text";

function App() {
  const [mode, setMode] = useState("light");
  return (
    <>
      <Navbar title="textUtils" mode={mode} />
      <div className="container my-4">
        <Text heading="Enter the text to analyze" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
