import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

  return (
    isMenuOpen &&
    <div className='absolute z-10 bg-white p-5 w-44 shadow-lg'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>

        <li className='font-bold'>You</li>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Show More</li>

        <li className='font-bold'>You</li>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Show More</li>
      </ul>
    </div>
  )
}

export default SideBar
