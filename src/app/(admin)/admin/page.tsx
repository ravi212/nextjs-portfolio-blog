"use client"
import Dashboard from '@/components/molecules/admin/dashboard'
import { getAllMessages } from '@/lib/actions/message.action'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
  }, [])

  const getMessages = async () => {
    const messages = (await getAllMessages()).messages;
    setMessages(messages)
  }
  
  return (
    <Dashboard messages={messages} getMessages={getMessages}/>
  )
}

export default Page