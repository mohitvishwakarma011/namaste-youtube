import React from 'react'

const Button = ({name}) => {
  return (
    <button className='p-2 m-2 bg-gray-200 rounded-md'>
      {name}
    </button>
  )
}

export default Button
