import Display from "./components/Display";
import Buttons from "./components/Buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let values = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
  ];

  let [calval, setcalval] = useState("");
  const buttonClicked = (value) => {
    if (value === "C") {
      setcalval("");
    } else if (value === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newDisplayval = calval + value;
      setcalval(newDisplayval);
    }
  };

  return (
    <div className="container">
      <Display calval={calval}></Display>
      <Buttons values={values} buttonClicked={buttonClicked}></Buttons>
    </div>
  );
}

export default App;
