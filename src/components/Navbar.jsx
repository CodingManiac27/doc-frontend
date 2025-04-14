import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import Cookies from "js-cookie"

export const Navbar = () => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
  const tokenCheck = Cookies.get('token');
  if (tokenCheck) {
    setToken(true);
  } 
}, []);
  
  const tokenRemoveFn = () =>{
    const tokenTry = Cookies.get('token');
    if(tokenTry){
      Cookies.remove('token', { path: '/' });
      setToken(false)
    }
  }

  return (
    <div className='min-w-auto max-w-80% h-16 rounded-2xl shadow-xl my-4 flex flex-row justify-between '>

        {/* logo and name */}

        <div className='flex flex-row cursor-pointer' id='logo and name' onClick={() => navigate('/')}>
            <img src={assets.qc}  className='w-12 rounded-2xl my-auto mx-4 cursor-pointer aspect-square' alt=''/>
            <h1 className='font-bold text-blue-950 text-2xl ml-0.5 my-auto sm:block hidden'> QuickCare</h1>
        </div>

        {/* nav buttons */}

        <div className='flex flex-row my-auto max-w-auto mr-6 font-semibold' id='navigation'> 
            <NavLink to={'/'}> <button className='border-none shadow-none mx-2 rounded-2xl transition delay-75 hover:bg-gray-100 cursor-pointer px-2 py-1'>Home</button> </NavLink>
            <NavLink to={'/doctors'}> <button className='border-none shadow-none mx-2 rounded-2xl transition delay-75 hover:bg-gray-100 cursor-pointer px-2 py-1 whitespace-nowrap'>All Doctors</button> </NavLink>
            <NavLink to={'/about'}> <button className='border-none shadow-none mx-2 rounded-2xl transition delay-75 hover:bg-gray-100 cursor-pointer px-2 py-1 whitespace-nowrap'>About us</button> </NavLink>
            <NavLink to={'/contact'}> <button className='border-none shadow-none mx-2 rounded-2xl transition delay-75 hover:bg-gray-100 cursor-pointer px-2 py-1'>Contact</button> </NavLink>
            {/* <NavLink to={''}> <span className='border-gray-500 border-1 shadow-none mx-2 rounded-2xl transition delay-75 hover:bg-gray-100 cursor-pointer px-2 py-1 text-sm font-light no-underline lg:block hidden'>Admin login</span> </NavLink> */}
        </div>

        {
          token 
          ? <div className='flex items-center gap-2 cursor-pointer group relative mr-4'>
            <img src={assets.upload_area} alt="" className='w-8 rounded-full'/>
            <img src={assets.dropdown_icon} alt="" className='w-2.5'/>
            <div className='absolute top-10 right-0 pt-4 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col shadow-lg gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div> :
          <button className='bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-sm w-[10rem] h-10 rounded-full my-auto text-white mr-6 lg:block hidden' id='create ac button' onClick={() => navigate('/signup')}>Create Account</button>
        }
    </div>
  )
}
