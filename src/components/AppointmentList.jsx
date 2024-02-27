import React, { useEffect, useState } from 'react';

const AppointmentList = () => {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json');
        const data = await response.json();

        if (data && data.appointments) {
          setAppointments(data.appointments);
        } else {
          console.error('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (appointments.length === 0) {
    return <div>Loading appointments...</div>;
  };


  return (
    <div>
      <h1>Today's Appointment List</h1>
      <table className="w-full table-auto">

        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Patient</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Doctor</th>
            <th className="px-4 py-2">Injury</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        {/* ------ */}
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{appointment.patient_name}</td>
              <td className="border px-4 py-2">{appointment.mobile_number}</td>
              <td className="border px-4 py-2">{appointment.appointment_date}</td>
              <td className="border px-4 py-2">{appointment.appointment_time}</td>
              <td className="border px-4 py-2">{appointment.doctor}</td>
              <td className="border px-4 py-2">{appointment.injury}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default AppointmentList;

