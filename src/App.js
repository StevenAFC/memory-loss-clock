import Moment from "react-moment";
import "./App.css";
import Day from "./Day";
import Time from "./Time";
import SoftTime from "./SoftTime";
import Date from "./Date";

Moment.startPooledTimer("interval={100}");

function App() {
  return (
    <div className="App">
      <Day />
      <br />
      <SoftTime />
      <br />
      <Time />
      <br />
      <Date />
    </div>
  );
}

export default App;
