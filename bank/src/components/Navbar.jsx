import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div >
      <ul className='flex border-b-2 border-black justify-end gap-3 h-auto p-4'>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/'>Owner</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
