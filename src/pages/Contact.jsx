import React from 'react'
import AuthorCard from '../components/AuthorCard'

export const Contact = () => {
  return (
    <div className='flex items-center '>

      <div className='flex flex-col m-auto'>

        {/* heading */}
        <div className='flex items-center text-2xl font-bold text-center my-8'> 
          <p>CONTACT US</p> 
        </div>

        <div>

          {/* info 1 */}

          <AuthorCard 
            name="Shubham Pawar"
            imgsrc="https://pbs.twimg.com/profile_images/1908420339991748608/-z7SID0h_400x400.jpg"
            github="https://github.com/CodingManiac27"
            linkedin="https://www.linkedin.com/in/shubham-pawar-9092b72b1/"
            role="Frontend"
            mail="shubhamxpawar27@gmail.com"
          />

          {/* info 2 */}

          <AuthorCard 
            name="Gaurav Phule"
            imgsrc="https://pbs.twimg.com/profile_images/1904974670597865472/wOfhXPZo_400x400.jpg"
            github="https://github.com/GauravPhule23"
            linkedin="https://www.linkedin.com/in/gaurav-phule-768394248/"
            role="Backend"
          />

          {/* info 3 */}
          
          <AuthorCard 
            name="Ayan Maniyar"
            imgsrc="https://media.licdn.com/dms/image/v2/D4E03AQFQ7Ve1cIsW6A/profile-displayphoto-shrink_800_800/B4EZY0rAckGgAc-/0/1744640413151?e=1750291200&v=beta&t=T5CjXCNXBLipsmvS6CDqrP_z6TXdXS9MRfLKvJlrzmY"
            linkedin="https://www.linkedin.com/in/ayan-maniyar-65a201360/"
            role="Documentation"
            mail="ayanmaniyar110@gmail.com"
          />
      
        </div>
      
      </div>

    </div>
  )
}
