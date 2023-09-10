import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Text from "./components/Text";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleswitch = () => {
    if (mode == "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <>
      <Navbar title="textUtils" mode={mode} toggleswitch={toggleswitch} />
      <div className="container my-4">
        <Text heading="Enter the text to analyze" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
