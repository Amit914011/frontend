import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function AdminPanel() {
  return (
    <>
    <div className='w-full min-h-screen flex bg'>
   <div className='w-[20%] h-screen bg border-r-2 '>
    <Sidebar/>
    </div>
   <div className='w-[80%] '>
    <Header/>
    <div>
        <Outlet/>
    </div>
   </div>
    </div>
      
    </>
  )
}
