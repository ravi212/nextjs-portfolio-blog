import React from 'react'

const ContactForm = () => {
  return (
    <div className="flex flex-col w-full max-w-lg mx-auto p-12 bg-white border shadow-2xl rounded-3xl gap-7">
    <h2 className="text-3xl text-darkColor font-semibold mb-4">Let's Work Together</h2>
    <form className="space-y-9">
      <div>
        {/* <label className="block text-lg font-medium text-secondaryColor" htmlFor="name">
          Name
        </label> */}
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="mt-1 block w-full p-4 border text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
        />
      </div>
      <div>
        {/* <label className="block text-lg font-medium text-primaryText" htmlFor="email">
          Email
        </label> */}
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className="mt-1 block w-full p-4 border text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        {/* <label className="block text-lg font-medium text-primaryText" htmlFor="message">
          Message
        </label> */}
        <textarea
          id="message"
          placeholder="Your Message"
          rows={4}
          className="mt-1 block w-full p-4 border text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-4 bg-darkColor text-white font-semibold rounded-md shadow-sm hover:bg-secondaryTextColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Send
      </button>
    </form>
  </div>
  )
}

export default ContactForm