import React, { useEffect } from 'react'
import { doctors } from '../assets/assets'
import { data, useParams } from 'react-router'
import { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'

export const Appointments = () => {

  const { docId } = useParams();
  const daysOfWeek = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ]

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  // const fetchDocInfo = async () => {
  //   const docInfo = doctors.find((doctor) => doctor._id === docId)
  //   setDocInfo(docInfo)
  // }

  //gaurav your part

  const fetchDocInfo = async () => {
    try {
      const res = await axios.get(`https://quickcare-backend.vercel.app/api/v1/patient/get-doctor/${docId}`);
      setDocInfo(res.data.data);
    } catch (error) {
      console.error("Failed to fetch doctor info:", error);
    }
  }

  const getavailableSlots = async () => {
    // try {
    //   const res = await axios.get(`https://quickcare-backend.vercel.app/api/v1/patient/get-slots/${docId}`);
    //   setDocSlots(res.data.data);
    // } catch (error) {
    //   console.error("Failed to fetch doctor slots:", error);
    // }

    setDocSlots([])

    let today = new Date()
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      if(today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      
      while(currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
        
        timeSlots.push({
          datetime : new Date(currentDate),
          time : formattedTime
        })
        
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots((prev) => ([...prev, slotTime]))
    }
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getavailableSlots();
  }, [docInfo]);

  return docInfo && (
    <div className='mt-6'>

      {/* doctor details */}

      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img src={docInfo.dpUrl} className='bg-indigo-600 w-72 sm:w-max-72 rounded-lg' alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>

          {/* name, degree, experience */}

          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.fullName} <img src={assets.verified_icon} className='w-5' alt="" /> </p>

          <div className='flex items-center gap-2 text-sm mt-1'>
            <p> {docInfo.speciality} </p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experienceOf} Years</button>
          </div>

          {/* about doctor */}

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-900 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>

          <p className='text-gray-600 font-medium mt-4'> Appointment fee : ₹ <span className='text-gray-800'>{docInfo.fees}</span></p>

        </div>
      </div>

    {/* Booking Slots */}

    <div className='sm:ml-72 mt-4 sm:pl-4 font-medium text-gray-700'>
      <p>Booking Slots</p>
      <div className='flex items-center gap-3 mt-2 w-full overflow-x-scroll mt-4'>
        {
          doctors.length && docSlots.map((item, index) => (
            <div key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-indigo-600 text-white' : 'border border-gray-200'}`} onClick={() => { setSlotIndex(index); setSlotTime(item[0].time) }}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDay()}</p>
            </div>
          ))
        }
      </div>
    </div>
      
    </div>
  )
}
