import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

  return (
    isMenuOpen &&
    <div className='fixed top-20 z-20 bg-white p-5 shadow-lg w-2/12 overflow-auto whitespace-nowrap'>
      <ul>
        <li className='p-1'><Link to="/">Home</Link></li>
        <li className='p-1'>Shorts</li>
        <li className='p-1'>Subscriptions</li>
        <hr></hr>
        <li className='font-bold mt-2'>You </li>
        <li className='p-1'>Your Channel</li>
        <li className='p-1'>History</li>
        <li className='p-1'>Your Videos</li>
        <li className='p-1'>Watch Later</li>
        <li className='p-1'>Show More</li>

        <li className='font-bold'>Explore</li>
        <li className='p-1'>Trending</li>
        <li className='p-1'>Shopping</li>
        <li className='p-1'>Music</li>
        <li className='p-1'>Films</li>
        <li className='p-1'>Live</li>
        <li className='p-1'>Gaming</li>
        <li className='p-1'>News</li>
        <li className='p-1'>Sports</li>
        <li className='p-1'>Learning</li>
        <li className='p-1'>Fashion & Beauty</li>
      </ul>
    </div>
  )
}

export default SideBar
