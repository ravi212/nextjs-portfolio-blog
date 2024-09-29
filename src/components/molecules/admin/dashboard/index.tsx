import React from 'react'
import Messages from '../messages'

const Dashboard = ({messages}: {messages: MessageType[]}) => {
  return (
    <div>
        <Messages isAdmin messages={messages} />
    </div>
  )
}

export default Dashboard