import React from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
//import localizer from 'react-big-calendar/lib/localizers/globalize'
//import globalize from 'globalize'

//localizer(globalize)

BigCalendar.momentLocalizer(moment);
let Calendar = (props) => (
  <div {...props}>
    <BigCalendar
      selectable
      events={props.events}
      //culture={'es'}
      defaultView="month"
      views={['month']}
      scrollToTime={new Date(1970, 1, 1, 6)}
      defaultDate={new Date()}
      onSelectEvent={event => alert(event.title)}
    //   onSelectSlot={slotInfo =>
    //     alert(
    //       `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
    //         `\nend: ${slotInfo.end.toLocaleString()}` +
    //         `\naction: ${slotInfo.action}`
    //     )
    //  }
    />
  </div>
)

export default Calendar