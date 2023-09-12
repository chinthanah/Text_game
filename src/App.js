import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
// import Text from "./components/Text";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("dark");
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  // };

  const toggleswitch = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("light mode is enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      // showAlert("dark mode is enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="textUtils" mode={mode} toggleswitch={toggleswitch} />
      {/* <Alert alert={alert} /> */}
      <div className="container my-4">
        <Text heading="Enter the text to analyze" />
      </div>
      <About />
    </>
  );
}

export default App;
