import { useState } from "react";
import dayjs from "dayjs";
import Calendar from "./components/calendar";
import "./index.css";

export default function App() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}>
          ← Back
        </button>

        <h2>{currentMonth.format("MMMM YYYY")}</h2>

        <button onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}>
          Next →
        </button>
      </div>

      <Calendar currentMonth={currentMonth} />
    </div>
  );
}



















