import React from 'react'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactInfo = () => {
  return (
    <div className="w-full h-full flex flex-1 flex-col justify-center items-start lg:items-center text-primaryColor  p-4">
    {/* <h2 className="text-2xl font-bold mb-4">Contact Information</h2> */}
    <div className="space-y-6 flex flex-col gap-6">
      <div className='flex flex-row gap-4 items-center'>
      <div className='flex justify-center items-center shadow-xl p-4 bg-primaryColor rounded-xl'>
        <AttachEmailIcon className='w-8 h-8 text-secondaryColor' />
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-primaryColor">Email</h3>
        <p className="text-primaryColor">raviraina212@gmail.com</p>
      </div>
      </div>
      <div className='flex flex-row gap-4 items-center '>
        <div className='flex justify-center items-center shadow-xl p-4 bg-primaryColor rounded-xl'>
        <PhoneIcon className='w-8 h-8 text-secondaryColor' />
        </div>
      
      <div>
        <h3 className="text-lg font-medium text-primaryColor">Phone</h3>
        <p className="text-primaryColor">+91-9796259181</p>
      </div>
      </div>
      <div className='flex flex-row gap-4 items-center'>
        <div className='flex justify-center items-center shadow-xl p-4 bg-primaryColor rounded-xl'>
        <LocationOnIcon className='w-8 h-8 text-secondaryColor' />
        </div>
        
      <div>
        <h3 className="text-lg font-medium text-primaryColor">Address</h3>
        <p className="text-primaryColor">Punjab, India</p>
      </div>
      </div>

    </div>
  </div>
  )
}

export default ContactInfo