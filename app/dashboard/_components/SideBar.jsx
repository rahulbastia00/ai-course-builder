"use client"
import React from 'react';
import Image from 'next/image';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { TbPremiumRights } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress"


function SideBar() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            icon: <IoHomeOutline />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <MdOutlineExplore />,
            path: '/dashboard/explore'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: <TbPremiumRights />,
            path: '/dashboard/upgrade'
        },
        {
            id: 4,
            name: 'Logout',
            icon: <IoMdLogOut />,
            path: '/dashboard/logout'
        },
    ];
    const path = usePathname();

    return (
        <div className="fixed h-full md:w-64 p-5 shadow-md">
            <Image src="/logo.svg" width={160} height={100} alt="Logo" />
            <hr className="my-5" />

            <ul>
                {Menu.map((item) => (
                    <Link key={item.id} href={item.path}> {/* Move key here and fix href */}
                        <div 
                            className={`flex item-center gap-2 text-gray-600 p-3 cursor-pointer
                            hover:bg-gray-100 hover:text-black rounded mb-3xs
                            ${item.path === path ? 'bg-gray-100 text-black' : ''}`}>
                            <div className="text-xl">{item.icon}</div>
                            <h2>{item.name}</h2>
                        </div>
                    </Link>
                ))}
            </ul>
            <div className="absolute bottom-10 w-[80%]">
                <Progress value={33} />
                <h2 className="text-sm my-2">Out of 5 course created</h2>
                <h2 className="text-xs text-gray-500">Upgrade your plan for unlimited course grade</h2>
            </div>
        </div>
    );
}

export default SideBar;