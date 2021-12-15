import React from 'react'
import './Events.css'
import { events } from '../../dummyData';
import Event from '../../components/Event/Event';
import Categories from '../../components/Categories/Categories';

const Events = () => {
    return (
        <div className='events'>
            <div className="event-categories-container">
                <Categories />
            </div>
            <div className="events-container">
                {events.map(event => (
                    <Event
                        key={event.id}
                        title={event.title}
                        desc={event.desc}
                        eventImg={event.eventImg}
                        postDate={event.postDate}
                        scheduleDate={event.scheduleDate} />
                ))}
            </div>
        </div>
    )
}

export default Events
