import React from 'react'
import { doctors } from '../assets/assets'
import { Link, Navigate, useNavigate } from 'react-router'

// use params and use context is left

export const TopDoctors = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center py-16 gap-4 text-gray-800'>

        {/* Info text */}

        <p className='text-3xl font-semibold mb-4'>Top Doctors to Book</p>
        <div className='text-sm font-sans font-medium text-center'>
            <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>

        {/* Doctor's cards */}

        <div className='flex flex-wrap justify-center mt-10 w-auto h-auto gap-4'>

            {doctors.slice(0, 10).map((val, i) => (
                <Link to={`/appointments/${val._id}`} className='flex flex-col mx-1.5 hover:translate-y-[-10px] transition-all duration-500 rounded-xl border-1 border-indigo-400' key={i}>
                    <img src={val.dpUrl} alt="" className='w-16 sm:w-52 bg-indigo-100 rounded-t-lg'/>
                    <div className='bg-gray-100 rounded-b-xl pl-4 py-3'> 
                        <p className='text-lg font-medium'>{val.fullName}</p>
                        <p className='font-medium'>{val.speciality}</p>
                    </div>
                </Link>
            ))}

        </div>

        <button onClick={() => { navigate('/doctors'); scrollTo(0,0) }} className="bg-blue-100 transition delay-100 ease-in-out hover:bg-indigo-600 text-gray-800 hover:text-white px-12 py-3 rounded-full mt-10 cursor-pointer" > more </button>

    </div>
  )
}
