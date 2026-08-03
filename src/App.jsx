import { format } from "date-fns";
import "./App.css";

function App() {
  const currentTime = new Date();

  return (
    <div className="container">
      <div className="clock-card">
        <h1>Ralph's Clock</h1>
       
        <h2 className="time">
          {format(currentTime, "HH:mm:ss")}
        </h2>

        <p className="date">
          {format(currentTime, "EEEE, dd MMMM yyyy")}
        </p>
      </div>
    </div>
  );
}

export default App;