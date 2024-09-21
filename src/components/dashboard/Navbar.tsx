import { IconProp } from '@/inteface/Iconinterface';
import { Bell, Circle, MessageCircleMoreIcon, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Icons:IconProp[] = [
  {
    id: 1,
    icon: <MessageCircleMoreIcon />,
    url: "/",
  },
  {
    id: 2,
    icon: <Bell />,
    url: "/",
  },
  {
    id: 3,
icon: <Circle/>,
    url: "signup/",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-600 p-1 lg:p-3 rounded-md">
      <div className="text-white">Product</div>
      <div className="flex items-center gap-3 lg:gap-5">
        <div className="flex items-center gap-2 p-0.5 lg:p-2 rounded bg-slate-500">
          <SearchIcon className="text-white" />
          <input
            type="search"
            className="bg-transparent text-white placeholder:text-slate-200"
            placeholder="search.."
          />
        </div>
        <div className='flex gap-0.5'>
          {Icons.map((icons) => (
            <Link key={icons.id} className='text-slate-400 hover:text-slate-300' href={icons.url}>{icons.icon}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar