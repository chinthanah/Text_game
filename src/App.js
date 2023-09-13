import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Text from "./components/Text";
// import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
      <Router>
        <Navbar title="textUtils" mode={mode} toggleswitch={toggleswitch} />
        <div className="container my-4">
          <Routes>
            {/* Define routes using the <Route> component */}
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={<Text heading="Enter the text to analyze" mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
