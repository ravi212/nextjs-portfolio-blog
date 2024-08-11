import React from 'react'

const ContactInfo = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Address</h3>
        <p className="text-gray-700">123 Main Street, Anytown, USA</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">Phone</h3>
        <p className="text-gray-700">+1 (123) 456-7890</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">Email</h3>
        <p className="text-gray-700">info@example.com</p>
      </div>
    </div>
  </div>
  )
}

export default ContactInfo