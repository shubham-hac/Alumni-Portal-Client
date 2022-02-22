import React,{useState, useEffect} from 'react'
import './Events.css'
// import { events } from '../../dummyData';
import Event from '../../components/Event/Event';
import Categories from '../../components/Categories/Categories';
import axios from 'axios';
// import Spinner from '../../components/Spinner/Spinner';
import SkeletonLoading from '../../components/SkeletonLoading/SkeletonLoading';

const Events = () => {
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
      const fetchEvents = async () => {
            try {
                const response = await axios.get(`${process.env.BACKEND_SERVER}/events/all`);
                const  data = await response.data;
                console.log(data);
                setEvents(data);
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
      }
      fetchEvents();
    }, []);
    
    return (
        <div className='events'>

            <div className="event-categories-container">
                <Categories />
            </div>
            <div className="events-container">
                {/* <div className="post-event">
                    Post an Event
                </div> */}
                {loading 
                
                ? events.map(event => (
                    <Event
                        key={event._id}
                        id={event._id}
                        title={event.title}
                        desc={event.desc}
                        eventImage={event.eventImage}
                        postDate={event.postDate}
                        scheduleDate={event.scheduleDate}
                        userId={event.userId} />
                ))
                : (
                    <>
                    <SkeletonLoading />
                    <SkeletonLoading />
                    <SkeletonLoading />
                    </>
                ) }
            </div>
        </div>
    )
}

export default Events
