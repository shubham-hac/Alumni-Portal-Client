import React, { useState, useEffect } from 'react'
import './Events.css'
// import { events } from '../../dummyData';
import Event from '../../components/Event/Event';
import Categories from '../../components/Categories/Categories';
import axios from 'axios';
// import Spinner from '../../components/Spinner/Spinner';
import SkeletonLoading from '../../components/SkeletonLoading/SkeletonLoading';
import AddEvent from '../../components/AddEvent/AddEvent';
import { Box, Button, Modal } from '@mui/material';

const Events = () => {
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/events/all');
                const data = await response.data;
                // const response = await axios.get('http://127.0.0.1:5000/events/all');
                // const  data = await response.data;
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
                <div className="post-event">
                    <button className='btn btn-primary add-event-btn' onClick={handleOpen}>Add Event +</button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <AddEvent />
                        </Box>
                    </Modal>
                    {/* <AddEvent /> */}
                </div>
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
                    )}
            </div>
        </div>
    )
}

export default Events
