import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <div className='w-full h-10 bg border-b-2 p-2 flex justify-between text-white'>
    <Link to='/admin' className='text-xl'>DASHBOARD</Link>
    <div className='pr-10 flex gap-3 justify-center items-center'>
        <h1>Admin</h1>
        <FaUserCircle className='inline text-xl' />
    </div>
    </div>
      
    </>
  )
}
