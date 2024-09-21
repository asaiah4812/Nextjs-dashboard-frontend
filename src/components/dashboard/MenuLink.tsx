"use client"
import { LinkProps } from '@/inteface/MenuInteface';
import { HeartHandshake, LayoutDashboard, ShieldCheck, ShoppingBasket, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Links:LinkProps[] = [
  {
    id: 1,
    title: "Page",
    list: [
      {
        id: 1,
        name: "Dashboard",
        url: "/dashboard",
        icon: <LayoutDashboard />,
      },
      {
        id: 2,
        name: "Users",
        url: "/dashboard/users",
        icon: <User />,
      },
      {
        id: 3,
        name: "Products",
        url: "/dashboard/products",
        icon: <ShoppingBasket />,
      },
    ],
  },
  {
    id: 2,
    title: "Analysis",
    list: [
      {
        id: 1,
        name: "Revenue",
        url: "/",
        icon: <ShieldCheck />,
      },
      {
        id: 2,
        name: "Users",
        url: "/",
        icon: <User />,
      },
      {
        id: 3,
        name: "Teams",
        url: "/Products/",
        icon: <HeartHandshake />,
      },
    ],
  },
];

const MenuLink:React.FC = () => {
    const pathname = usePathname()
  return (
    <>
      {Links.map((links) => (
        <div key={links.id} className="flex flex-col py-4 px-2 gap-3">
          <h2 className="text-white">{links.title}</h2>
          {links.list.map((link) => (
            <Link
                href={link.url}
              key={link.id}
              className={`flex ${
                pathname === link.url
                  ? "from-slate-700 bg-gradient-to-r to-slate-400"
                  : ""
              } hover:bg-slate-500 p-2 rounded-md gap-3 items-center`}
            >
              <span className="text-white">{link.icon}</span>{" "}
              <h2 className="text-white">{link.name}</h2>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}

export default MenuLink