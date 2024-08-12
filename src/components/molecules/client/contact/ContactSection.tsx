import ContactForm from '@/components/atoms/contact/ContactForm'
import ContactInfo from '@/components/atoms/contact/ContactInfo'
import React from 'react'

const ContactSection = () => {
  return (
    <div className="w-[90%] md:w-[100%] m-auto h-auto px-0 py-20 md:px-20 md:py-20 flex flex-col lg:flex-row text-primaryTextColor gap-16">
      <div className="flex-1">
        <ContactForm />
      </div>
      <div className="flex-1">
        <ContactInfo />
      </div>
    </div>
  )
}

export default ContactSection