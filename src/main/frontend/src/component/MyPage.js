import React, { useEffect, useState } from 'react';
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import './../style/MyCalendar.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

const MyPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const storedEvents = localStorage.getItem("watched");
        console.log("storedEvents : " + storedEvents);
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents));
        }

        const draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function (eventEl) {
                let id = eventEl.getAttribute("data-id");
                let name = eventEl.getAttribute("title");
                return {
                    id: id,
                    title: name,
                    startEditable: true,
                    create: true
                };
            }
        });
    }, []);

    const handleEventDrop = (info) => {
        const { event } = info;
        const newEvents = [...events];
        const index = newEvents.findIndex((e) => e.id === event.id);
        newEvents[index] = {
            ...newEvents[index],
            start: event.start,
            end: event.end
        };
        setEvents(newEvents);
        localStorage.setItem("watched", JSON.stringify(newEvents));
    };

    return (
        <>
            <Header />
            <div className='calendar-head'>
                <div>
                    <h2>이벤트 목록</h2>
                    <div id="external-events">
                        {events.map((event) => (
                            <div
                                className="fc-event fc-h-event mb-1 fc-daygrid-event fc-daygrid-block-event p-2"
                                title={event.placeName}
                                data-id={event.placeId}
                                key={event.placeId}
                                style={{
                                    backgroundColor: event.color,
                                    borderColor: event.color,
                                    cursor: "pointer"
                                }}
                            >
                                <div className="fc-event-main">
                                    <div>
                                        <strong>{event.placeName}</strong>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        events={events}
                        editable={true}
                        droppable={true}
                        eventDrop={handleEventDrop}
                    />
                </div>
            </div>
        </>
    );
};

export default MyPage;
