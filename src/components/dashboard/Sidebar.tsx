import Image from 'next/image'
import React from 'react'
import MenuLink from './MenuLink';

const Sidebar = () => {
  return (
    <div className='hidden md:flex flex-col w-[100%] h-screen bg-slate-600 py-4 px-2'>
        <div className='flex gap-3 items-center'>
            <div>
                <Image src={'/profile.jpg'} width={60} height={60} className='rounded-full' alt='profile'/>
            </div>
            <div>
                <h2 className='text-xl font-bold text-white'>Admin</h2>
                <span className='text-white'>Administration</span>
            </div>
        </div>
        <MenuLink/>
    </div>
  )
}

export default Sidebar;