import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";

function App() {
  return (
    <>
      <Navbar title="textUtils" about="About" />
      <div className="container my-4">
        <Text heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
