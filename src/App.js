import React, { useEffect, useState } from "react";
import AttendeeCard from './components/AttendeeCard/AttendeeCard';

import logo from './images/nerdout.png';
import './App.css';
import { FaPlus } from 'react-icons/fa';

function App() {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
  const [attendeesData, setAttendeesData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedAttendeeData, setSelectedAttendeeData] = useState({})

  console.log(selectedAttendeeData);

  const handleShowDetails = (attendee) => {
    // console.log(attendee);
    setSelectedAttendeeData(attendee);
  }


  useEffect(() => {
    const url = API_ENDPOINT;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setAttendeesData(data);
      } catch (error) {
        console.log(error);
        setErrorMessage("Unable to retreive email");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSelectedAttendeeData(attendeesData[0])
  },[attendeesData])

  const attendeesList = attendeesData.map(attendee => {
    // console.log(attendee)
    return (
      <AttendeeCard 
        key={attendee._id}
        attendee={attendee}
        handleShowDetails={handleShowDetails}
      />
    )
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-container'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <main className='main-container'>
        <section className='attendees'>
          <div className='attendees-header'>
            <h2>Attendees</h2>
            <button
              className="add-attendee-btn"
              type="button"
              // onClick={handleShowForm}
            >
              <FaPlus className="add-attendee-btn-icon" />
            </button>
          </div>
          <div className='attendees-list-container'>
            {attendeesList}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
