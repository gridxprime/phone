import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
function Calendar() {
  return (
    <section>
        <span>Calendar</span>
        <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth'>

        </FullCalendar>
    </section>
      

  )
}

export default Calendar
