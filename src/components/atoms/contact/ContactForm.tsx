import React from 'react'

const ContactForm = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-lg font-medium text-primaryText" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-primaryText" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className="mt-1 block w-full p-4 border text-primaryText border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-primaryText" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your Message"
          rows={4}
          className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-4 bg-primaryColor text-secondaryColor font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Send
      </button>
    </form>
  </div>
  )
}

export default ContactForm