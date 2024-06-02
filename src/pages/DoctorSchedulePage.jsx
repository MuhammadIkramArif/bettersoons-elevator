import React, { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DashboardLayout from "../components/layouts/DashboardLayout";

const DoctorSchedulePage = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      // You can initialize FullCalendar here with your options
      const calendarApi = calendarRef.current.getApi();
      // Example: set up initial events
      const initialEvents = [
        {
          title: "Appointment 1",
          subTitle: "Checkup",
          start: "2024-03-07T10:00:00",
          end: "2024-03-07T11:00:00",
        },
        {
          title: "Appointment 2",
          subTitle: "Consultation",
          start: "2024-03-08T14:00:00",
          end: "2024-03-08T15:00:00",
        },
      ];
      calendarApi.addEventSource(initialEvents);
    }
  }, []);

  return (
    <DashboardLayout>
      <h3 className="mb-4 text-2xl font-semibold capitalize">
        Schedule Timing
      </h3>
      <div className="bg-white shadow p-4 md:p-6 rounded-md">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "title",
            right: "prev,next today,timeGridWeek,timeGridDay",
          }}
          editable={true}
          selectable={true}
          selectMirror={true}
          eventResizableFromStart={true}
          droppable={true}
          ref={calendarRef}
          eventContent={(arg) => (
            <div className="flex flex-col px-2 py-1">
              <span title={arg.timeText} className="line-clamp-1">
                {arg.timeText}
              </span>
              <b title={arg.event.title} className="line-clamp-1">
                {arg.event.title}
              </b>
              <p
                title={arg.event.extendedProps.subTitle}
                className="line-clamp-1"
              >
                {arg.event.extendedProps.subTitle}
              </p>
            </div>
          )}
        />
      </div>
    </DashboardLayout>
  );
};

export default DoctorSchedulePage;
