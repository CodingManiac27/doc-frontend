import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

export const Myprofile = () => {

  //@gaurav initialize the state variables here

  return (
    <div className='py'>
      <div className='rounded-2xl shadow-lg shadow-zinc-400 pb-4'>

        <div className='flex flex-row p-16'>
          <img src={assets.profile_pic} className='w-44 rounded-full mr-6' alt="" />
          <button className='px-3 py-3 my-auto mr-6 font-semibold rounded-2xl border border-gray-400 cursor-pointer'>Upload new photo</button>
        </div>

        <hr /><br />

        <div className='flex flex-col p-4 mx-10 border border-gray-300 rounded-2xl mt-4 mb-8 transition hover:scale-102'>

          <div className='font-bold mt-2'>Personal info</div>

          <div className='flex flex-row gap-x-16 mt-8'>
            <div className='flex flex-col'>
              <p className='font-light'>Full name</p>
              <p>Name</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-light'>Email</p>
              <p>quickcare@gmail.com</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-light'>Phone</p>
              <p>+000000000</p>
            </div>
          </div>

        </div>

        <div className='flex flex-col p-4 mx-10 border border-gray-300 rounded-2xl mb-10 transition hover:scale-102'>

          <div className='font-bold mt-2'>Basic info</div>

          <div className='flex flex-row gap-x-16 mt-8'>
            <div className='flex flex-col'>
              <p className='font-light'>DOB</p>
              <p>27-02-2006</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-light'>Gender</p>
              <p>binary</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-light'>Phone</p>
              <p>+000000000</p>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}
