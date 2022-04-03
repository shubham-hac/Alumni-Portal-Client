import React, { useState, useRef, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';
import "./AddEvent.css"

const AddEvent = ({setOpen}) => {
    const title = useRef();
    const description = useRef();
    const scheduleDate = useRef();
    const address = useRef();
    const [errorMsg, setErrorMsg] = useState("");
    const [file, setFile] = useState();
    const [selected, setSelected]  = useState(false);
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleFileChange = (e) => {
            setFile(e.target.files[0]);
            setSelected(true)
            console.log(e.target.files[0]); 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        const newEvent = {
            userId: user._id,
            title: title.current.value,
            desc: description.current.value,
            scheduleDate: new Date(scheduleDate.current.value),
            address: address.current.value,
            eventImage: '',
        }
        if(selected){
            const data = new FormData();
            const fileName = file.name;
            data.append('file', file);
            data.append('name', fileName);
            newEvent.eventImage = fileName;
            try {
                await axios.post('http://localhost:5000/upload', data)
            } catch (error) {
                console.log(error)
            }   
            
        }
        try {
            const response = await axios.post('http://localhost:5000/events/new', newEvent);
            setOpen(false);
            console.log(response);
            window.location.reload();
            // navigate("/events");
            
        } catch (error) {
            // error.response.data  && console.log(error.response.data);
            setErrorMsg("error");
        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name='title' ref={title} required />
                <br />
                <label htmlFor="description">Description</label>
                <textarea name="description" ref={description}></textarea>
                <br />
                <label htmlFor="scheduleDate">Schedule Date</label>
                <input type="date" name="scheduleDate" ref={scheduleDate} required />
                
                <br />
                <label htmlFor="address">Address</label>
                <input type="text" name="address" ref={address} />
                <br />
                <input type="file"
                    id="file" name="file"
                    onChange={handleFileChange} />
                {file && (
                    <div className="shareImageContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImage" />
                        <button className="shareCancelImage" onClick={() => setFile(null)}>X</button>
                    </div>
                )}
                <button type='submit' className='btn btn-primary'>Add</button>
            </form>
        </div>
    )
}

export default AddEvent