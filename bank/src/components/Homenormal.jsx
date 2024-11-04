import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Homeadmin from './Homeadmin'

const Homenormal = ({mockData}) => {

  return (
    <div className='flex flex-col  gap-5 flex justify-center h-[100vh] items-center'>
        <h1 className='text-4xl'>Generation Thailand <br />
        React - Assessment</h1>

        <div className="flex gap-3">
            <button  className='border border-black bg-grenn p-3 rounded'>
                <Link to='user'> User Home Sector </Link>
            </button>
            <button className='border border-black bg-grenn p-3 rounded'>Admin Home Sector</button>
        </div>
    </div>
  )
}

export default Homenormal
