import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function Celender() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          prev2Label={null}
          next2Label={null}
          className="custom-calendar"
        />
      </div>
    </div>
  );
}
