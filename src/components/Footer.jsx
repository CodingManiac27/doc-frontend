import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router'

export const Footer = () => {

    const navigate = useNavigate();

  return (
    <div className='md:mx-10'>

        {/* upper part */}

        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* left */}
            
            <div>

                {/* logo */}

                <div className='flex flex-row cursor-pointer mb-5' id='logo and name' onClick={() => navigate('/')}>
                    <img src={assets.qc}  className='w-12 h-12 rounded-xl mr-2 cursor-pointer' alt=''/>
                    <h1 className='font-bold text-blue-950 text-3xl my-auto'> QuickCare</h1>
                </div>

                {/* text */}

                <p className='flex flex-wrap w-full md:w-2/3 text-gray-700 leading-6'>At QuickCare, we aim to make healthcare simple and accessible. Search for qualified doctors, view their details, and book appointments quickly without any hassle. Your health is our top priority.</p>

            </div>

            {/* middle */}

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li onClick={() => navigate('/')} className='cursor-pointer'>Home</li>
                    <li onClick={() => navigate('/about')} className='cursor-pointer'>About us</li>
                    <li onClick={() => navigate('/contact')} className='cursor-pointer'>Contact us</li>
                    <li onClick={() => navigate('/')} className='cursor-pointer'>Privacy policy</li>
                </ul>
            </div>

            {/* right */}

            <div>
                <p className='text-xl font-medium mb-5'>Get in touch</p>
                <ul>
                    <li> <a className='text-blue-800 hover:underline' href="https://mail.google.com/mail/?view=cm&fs=1&to=quickcarehealthcare@gmail.com" target="_blank">quickcarehealthcare@gmail.com</a> </li>
                </ul>
            </div>

        </div>

        {/* closing line */}

        <hr />
        <br />

    </div>
  )
}
