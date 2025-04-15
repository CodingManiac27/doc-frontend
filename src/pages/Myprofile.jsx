import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { assets } from '../assets/assets';

export const Myprofile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const cookie = Cookies.get('token');

    if (!cookie) {
      window.location.href = '/login'; // Redirect to login if no cookie
      return;
    }

    try {
      const payload = jwt.verify(cookie, "DocUser123542");
      setProfileData(payload);
    } catch (err) {
      console.error("JWT verification failed:", err);
      window.location.href = '/login'; // Redirect to login if token is invalid
    }
  }, []);

  return profileData ? (
    <div className='py'>
      <div className='rounded-2xl shadow-lg shadow-zinc-400 pb-4'>
        <div className='flex flex-row p-16'>
          <img src={profileData.dpUrl ? profileData.dpUrl : assets.profile_pic} className='w-44 rounded-full mr-6' alt="" />
          <button className='px-3 py-3 my-auto mr-6 font-semibold rounded-2xl border border-gray-400 cursor-pointer'>Upload new photo</button>
        </div>
        <hr /><br />
        <div className='flex flex-col p-4 mx-10 border border-gray-300 rounded-2xl mt-4 mb-8 transition hover:scale-102'>
          <div className='font-bold mt-2'>Personal info</div>
          <div className='flex flex-row gap-x-16 mt-8'>
            <div className='flex flex-col'>
              <p className='font-light'>{profileData.fullName}</p>
              <p>Name</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-light'>{profileData.email}</p>
              <p>Email</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col p-4 mx-10 border border-gray-300 rounded-2xl mb-10 transition hover:scale-102'>
          <div className='font-bold mt-2'>Basic info</div>
          <div className='flex flex-row gap-x-16 mt-8'>
            <div className='flex flex-col'>
              <p className='font-light'>DOB</p>
              <p>{profileData.dob.split("T")[0]}</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-light'>Gender</p>
              <p>{profileData.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null; // Renders nothing if profileData is null
};
