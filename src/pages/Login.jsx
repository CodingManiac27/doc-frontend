import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

export const Login = () => {
  const [userType, setUserType] = useState('Patient');
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitFn = async (e) => {
    e.preventDefault();
    const email = formData.email
    const password = formData.password
    const role = userType

    const data = {
      email,
      password,
      role
    }
    console.log(data);
    

    await axios.post("https://quickcare-backend.vercel.app/api/v1/Authentication/login", data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
      .then(res => {
        const token = res.data.data
        Cookies.set('token', token, {
          expires: 1,        // 1 day
          path: '/',
          secure: true,      // required for cross-site cookies
          sameSite: 'None'   // required for cross-site cookies
    });
        toast.success("Logged in successfully");
        navigate('/');
      })
      .catch(error => {
        console.error("❌ Error:", error);
        const errMsg = error.response?.data?.errors;

        if (error.response) {
          console.log("📌 Server responded with:", error.response.data);
        } else if (error.request) {
          console.log("📌 No response received:", error.request);
        } else {
          console.log("📌 Axios error:", error.message);
        }

        if (typeof errMsg === "string") {
            if (errMsg.includes("Incorrect password")) {
              toast.error("Incorrect password");
            } else {
              toast.error(errMsg);
            }
        } else {
          toast.error("Something went wrong.");
        }
      });
  }

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={submitFn}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 text-zinc-600 rounded-xl shadow-lg">

        <div className="flex w-full mb-4">
          <button
            className={`flex-1 py-2 ${userType === 'Patient' ? 'bg-indigo-600 text-white' : 'bg-gray-200'} rounded-l-md no-select`}
            onClick={() => setUserType('Patient')}
            type="button"
          >
            User Login
          </button>
          <button
            className={`flex-1 py-2 ${userType === 'Doctor' ? 'bg-indigo-600 text-white' : 'bg-gray-200'} rounded-r-md no-select`}
            onClick={() => setUserType('Doctor')}
            type="button"
          >
            Doctor Login
          </button>
        </div>

        <p className='text-2xl font-semibold no-select' >Login as {userType == 'Patient' ? "User" : "Doctor"}</p>
        <p style={{ userSelect: 'none' }}>Please log in to continue</p>

        <div className='w-full no-select'>
          <p className='no-select'>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-2'
            type="email"
            name='email'
            required
            onChange={handleChange}
          />
        </div>

        <div className='w-full no-select'>
          <p className='no-select'>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-2'
            type="password"
            name='password'
            onChange={handleChange}
            required
          />
        </div>

        <button className='bg-indigo-600 text-white w-full py-2 rounded-md text-base cursor-pointer mt-2'>Login</button>

        <p className='no-select' >Don't have an account? <Link to={'/signup'} className='text-indigo-600 underline cursor-pointer'>Sign up here</Link></p>
      </div>
    </form>
  );
};
