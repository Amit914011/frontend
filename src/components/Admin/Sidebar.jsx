import React from 'react'
import { MdDashboardCustomize } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { PiBooksBold } from "react-icons/pi";
import { GiBookmarklet } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      <div className='w-full h-32 flex items-center justify-center bg border text-3xl font-bold uppercase text-white '>
      <Link to='/admin'>Logo</Link> 
      </div>    
      <div className='pl-3 w-full h-auto p-2 text-md uppercase font-semibold text-white'>
        <Link to='/admin' className='py-2 block border-b'><MdDashboardCustomize className='inline text-xl' /> Dashboard</Link>
        <Link to='/admin/singlecourse' className='py-2 block border-b'><FaBook className='inline text-xl' /> Single COurses</Link>
        <Link to='/admin/combocourse' className='py-2 block border-b'><PiBooksBold className='inline text-xl' /> Combo COurses</Link>
        <Link to='/admin/dataanalytics' className='py-2 block border-b'><GiBookmarklet className='inline text-xl'/> Data Analytics</Link>
        <h1 className='py-2 block border-b'><IoLogOut  className='inline text-xl'/> Logout</h1>
      </div> 
    </div>
  )
}
