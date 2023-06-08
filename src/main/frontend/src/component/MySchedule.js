import React, { useEffect, useState } from 'react';
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import './../style/MyCalendar.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

const MySchedule = () => {
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

    const removeEvent = (info) => {
        console.log("remove :: " +info);
    }

    return (
        <>
            <Header />
            <div className='calendar-head' style={{display : 'flex'}}>
                <div style={{marginTop : '100px', marginRight : '50px' , width : '35%'}}>
                    <h2>My List</h2>
                    <div id="external-events"
                         style={
                              { justifyContent : 'center',
                                display : 'flex',
                                textAlign : "center",
                                flexWrap: 'wrap',
                                position: 'relative'
                              }
                          }
                    >
                        {
                            events.length > 0  ?
                                events.map((event) => (
                                <div
                                    className="fc-event fc-h-event mb-1 fc-daygrid-event fc-daygrid-block-event p-2"
                                    title={event.placeName}
                                    data-id={event.placeId}
                                    key={event.placeId}
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor : 'white',
                                        borderColor : "pink"
                                    }}
                                >
                                    <div className="fc-event-main" style={{color  : 'black'}}>
                                        <div>
                                            <strong>{event.placeName}</strong>
                                        </div>
                                        <div>
                                            {/* 이미지 불러오기 */}
                                            <img  src={`http://localhost:8899/readImages/${event.image}`}
                                                  style={{width : '150px', height : '150px'}}/>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            ))
                            : <div> <br/><br/>
                                    트레줄러에서 원하는 테마를 선택하여 <br/>
                                    나의리스트에 추가해주세요
                              </div>
                        }
                    </div>
                </div>
                <div style={{marginTop : '100px', marginRight : '50px' , width : '65%'}}>
                    <FullCalendar
                        plugins={[dayGridPlugin,timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay"
                        }}
                        initialView="dayGridMonth"
                        events={events}
                        editable={true}
                        droppable={true}
                        eventDrop={handleEventDrop}
                        drop = {removeEvent}
                    />
                </div>
            </div>
        </>
    );
};

export default MySchedule;
