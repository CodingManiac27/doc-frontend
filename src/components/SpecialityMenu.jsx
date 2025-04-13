import React from 'react'
import { assets } from '../assets/assets'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router'

export const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center py-16 gap-4 text-gray-800'>

        {/* Info text */}

        <p className='text-3xl font-semibold mb-4'>Find by Speciality </p>
        <div className='text-sm font-sans font-medium text-center'>
            <p>Simply browse through our extensive list of trusted doctors,</p>
            <p> schedule your appointment hassle-free.</p>
        </div>

        {/* Images with label */}

        <div className='flex flex-row justify-center mt-10 w-full gap-4 h-30'>
            {specialityData.map((val, i) => (
                <Link to={`/doctors/${val.speciality}`} className='flex flex-col items-center px-1.5 hover:translate-y-[-10px] transition-all duration-500' key={i}>
                    <img src={val.dpUrl} alt="" className='w-16 sm:w-24 mb-2'/>
                    <p className='text-xs font-medium'>{val.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}
