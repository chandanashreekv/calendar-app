import dayjs from "dayjs";
import events from "../data/events.json";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calendar({ currentMonth }) {
  const startDay = currentMonth.startOf("month").startOf("week");
  const endDay = currentMonth.endOf("month").endOf("week");

  const days = [];
  let day = startDay;

  while (day.isBefore(endDay) || day.isSame(endDay, "day")) {
    days.push(day);
    day = day.add(1, "day");
  }

  const getEventsForDate = (date) =>
    events.filter(
      (event) => event.date === date.format("YYYY-MM-DD")
    );

  return (
    <>
      {/* Weekdays*/}
      <div className="weekdays">
        {WEEKDAYS.map((d) => (
          <div key={d} className="weekday">{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="calendar-grid">
        {days.map((date, index) => (
          <div
            key={index}
            className={`day-cell
              ${!date.isSame(currentMonth, "month") ? "other-month" : ""}
              ${date.isSame(dayjs(), "day") ? "today" : ""}`}
          >
            <div className="date-number">{date.date()}</div>

            {getEventsForDate(date).map((event, i) => (
              <div
                key={event.id}
                className={`event ${i % 2 ? "alt" : ""}`}
              >
                {event.title} ({event.time})
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}



















