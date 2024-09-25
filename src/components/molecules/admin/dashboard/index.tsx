import React from 'react'
import Messages from '../messages'

const Dashboard = ({messages, getMessages}: {messages: MessageType[], getMessages: () => void}) => {
  return (
    <div>
        <Messages messages={messages} getMessages={getMessages}/>
    </div>
  )
}

export default Dashboard