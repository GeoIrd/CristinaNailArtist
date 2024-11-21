import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ro"; // Importă locale-ul românesc pentru moment.js
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import { FaCalendarAlt } from "react-icons/fa"; // Importă iconul

// Setează locale-ul moment în română și începe săptămâna cu luni
moment.locale("ro", {
  week: {
    dow: 1, // Setează luni ca prima zi a săptămânii (dow = day of week)
  },
});

const localizer = momentLocalizer(moment);

const messages = {
  allDay: "Toată ziua",
  previous: "Anterior",
  next: "Următorul",
  today: "Astăzi",
  month: "Lună",
  week: "Săptămână",
  day: "Zi",
  agenda: "Agendă",
  date: "Data",
  time: "Ora",
  event: "Eveniment",
  noEventsInRange: "Nu sunt evenimente în această perioadă.",
  showMore: (total) => `+  ${total}`,
  // showMore: (total) => `+ încă ${total} evenimente`,
};

const CalendarPicker = () => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState("day"); // Stare pentru vizualizare

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Loc liber sau ocupat ?:");
    if (title) {
      setEvents((prevEvents) => [...prevEvents, { start, end, title }]);
    }
  };

  // Funcția de comutare între vizualizarea lunară și zilnică
  const toggleView = () => {
    setView(view === "day" ? "month" : "day");
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        {/* Butonul cu icon pentru a comuta între vizualizări */}
        <button onClick={toggleView} className="toggle-view-btn">
          <FaCalendarAlt size={24} /> {/* Icon calendar */}
          {/* {view === "day" ? "Vizualizare Lună" : "Vizualizare Zi"} */}
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100vh", width: "100vw" }}
        selectable
        onSelectSlot={handleSelectSlot}
        views={["day", "month", "agenda"]} // Adaugă vizualizarea lunară
        view={view} // Utilizează starea pentru vizualizare
        onView={setView} // Permite schimbarea vizualizării
        defaultView="day"
        messages={messages}
        min={new Date(1970, 1, 1, 8, 0, 0)} // Ora minimă
        max={new Date(1970, 1, 1, 22, 0, 0)} // Ora maximă
        step={30} // Interval de 30 de minute
        timeslots={2} // Două intervale per oră
        formats={{
          timeGutterFormat: "HH:mm",
          eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
            `${localizer.format(start, "HH:mm", culture)} - ${localizer.format(
              end,
              "HH:mm",
              culture
            )}`,
          agendaTimeRangeFormat: ({ start, end }, culture, localizer) =>
            `${localizer.format(start, "HH:mm", culture)} - ${localizer.format(
              end,
              "HH:mm",
              culture
            )}`,
        }}
      />
    </div>
  );
};

export default CalendarPicker;
