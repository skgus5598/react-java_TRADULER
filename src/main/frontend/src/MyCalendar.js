import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class MyCalendar extends Component {
    render() {
        return (
            <div >
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[ dayGridPlugin ]}
                />
            </div>
        );
    }
}
export default MyCalendar;