import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Homenormal from './components/Homenormal'
import Homeuser from './components/Homeuser'
import { Link } from 'react-router-dom'
function App() {

  const [isUser, setIsUser] = useState(false)
  const mockData = [
    {
        id: 1,
        name: "John",
        lastName: "Doe",
        position: "Manager",
        isAdmin: true
    }
]
  return (
    <div>
    <div className='flex flex-col  gap-5 flex justify-center h-[100vh] items-center'>
        <h1 className='text-4xl'>Generation Thailand <br />
        React - Assessment</h1>

        <div className="flex gap-3">
            <button  className='border border-black bg-grenn p-3 rounded'>
                <Link to='user'> User Home Sector </Link>
            </button>
            <button className='border border-black bg-grenn p-3 rounded'>
                <Link to='admin'>Admin Home Sector</Link>
            </button>
        </div>
    </div>
    </div>
  )
}

export default App
