import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router';
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { doctors as staticDoctors } from '../assets/assets'
// import { Appcontext } from '../context/Appcontext'
import axios from 'axios';

export const Doctors = () => {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get('https://quickcare-backend.vercel.app/api/v1/patient/get-doctors');
        if (res.data && res.data.data && res.data.data.length > 0) {
          setDoctorsList(res.data.data);
        } else {
          setDoctorsList(staticDoctors);
        }
      } catch (error) {
        console.error("Failed to fetch doctors, using static data:", error);
        setDoctorsList(staticDoctors);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <div className='flex flex-wrap justify-center mt-10 w-auto h-auto gap-4'>
        {doctorsList.map((val, i) => (
          <Link
            to={`/appointments/${val._id}`}
            className='flex flex-col mx-1.5 hover:translate-y-[-10px] transition-all duration-500 rounded-xl border-1 border-indigo-400'
            key={i}
          >
            <img src={val.dpUrl} alt="" className='w-16 sm:w-52 bg-indigo-100 rounded-t-lg' />
            <div className='bg-gray-100 rounded-b-xl pl-4 py-3'>
              <p className='text-lg font-medium'>{val.fullName}</p>
              <p className='font-medium'>{val.speciality}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
