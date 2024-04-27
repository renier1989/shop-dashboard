'use client';
import Image from "next/image"
import { BsFillQuestionCircleFill } from "react-icons/bs"
import { FaBarsStaggered, FaPowerOff } from "react-icons/fa6"
import { ImCalculator, ImHeadphones } from "react-icons/im"
import { SidebarMenuItem } from ".."
import { RiDashboardFill } from "react-icons/ri"
import { useState } from "react"
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { BiHeart } from "react-icons/bi";


const menuItems = [
    {
        path: '/dashboard/main',
        icon: <RiDashboardFill size={20} className="text-indigo-600" />,
        title: 'Dashboard',
    },
    {
        path: '/dashboard/counter',
        icon: <ImCalculator size={20} className="text-indigo-600" />,
        title: 'Counter',
    },
    {
        path: '/dashboard/pokemons',
        icon: <MdOutlineCatchingPokemon  size={20} className="text-indigo-600" />,
        title: 'Pokemons',
    },
    {
        path: '/dashboard/favorites',
        icon: <BiHeart  size={20} className="text-indigo-600" />,
        title: 'Favoritos',
    },
]

export const Sidebar = () => {

    const [show, setshow] = useState(false);


    return (
        <>
            <aside className="w-20 relative z-20 flex-shrink-0  px-2 overflow-y-auto bg-indigo-600 sm:block">
                <div className="mb-6">

                    <div className="flex justify-center">
                        <div className="w-14 h-14 rounded-full bg-gray-300 border-2 border-white mt-2">
                            <Image
                                src="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                                className="rounded-full w-auto"
                                alt="use avatar"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>


                    <div>
                        <ul className="mt-6 leading-10 px-4">
                            <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-blue-400 cursor-pointer"
                                onClick={() => setshow(!show)}
                            // @click="openMenu !== 1 ? openMenu = 1 : openMenu = null"
                            >
                                <FaBarsStaggered className="text-white" />
                            </li>
                            <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-pink-400 cursor-pointer">
                                <BsFillQuestionCircleFill className="text-white" />

                            </li>
                            <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-yellow-400 cursor-pointer">
                                <ImHeadphones className="text-white" />
                            </li>
                            <li className="absolute bottom-0 mb-3 p-2 rounded-full flex items-center mx-auto bg-white cursor-pointer">
                                <FaPowerOff className="text-indigo-600" />
                            </li>
                        </ul>
                    </div>
                </div>

            </aside>


            <aside
                className={`menu animate__animated ${show ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'} w-52 relative z-0 flex-shrink-0 px-4 overflow-y-auto bg-gray-100`}
                style={{ display: show ? 'block' : 'none' }}

            // className="animate__animated animate__fadeInLeft w-52 relative z-0 flex-shrink-0 hidden px-4 overflow-y-auto bg-gray-100 sm:block "
            // x-show="openMenu ==  1"
            // @click.away="openMenu = null" 
            // style={{ display: "none;" }}
            >
                <div className="mb-6" >

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-6">

                        {menuItems.map(item => (
                            <SidebarMenuItem key={item.path} {...item} />
                        ))}
                    </div>

                </div>
            </aside>


        </>
    )
}
