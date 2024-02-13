import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center p-2 shadow-md'>
      <img className='w-8' alt="chat" src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'></img>
      <span className=' mx-1 font-bold '>{name}</span>
      <p className='overflow-x-auto overflow-wrap break-word'>{message}</p>
    </div>
  )
}

export default ChatMessage
