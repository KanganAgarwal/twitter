import React from 'react'
import icon from "./icon.jpg"
import Image from "next/image"
import {HomeIcon,HashtagIcon} from '@heroicons/react/solid'
import { BellIcon, DotsCircleHorizontalIcon, MailIcon, UserIcon } from '@heroicons/react/outline'
import user from "./user.jpg"
const Sidebar = () => {
  return (
    <div className='z-50 mt-6 ml-4 md:ml-6 lg:ml-20 xl:ml-24 '>
        <div className='icon-container'>
        <Image src={icon} width={40} height={40} objectFit="contain" className='p-2' />
        </div>
        <div className='space-y-4 mt-4'>
            <div className='icon-container'>
<HomeIcon className='icon' />
</div>
            <div className='icon-container'>

<HashtagIcon className='icon'/>
</div>
<div className='icon-container'>
<BellIcon className='icon'/>
</div>
<div className='icon-container'>
<MailIcon className='icon'/>
</div>
<div className='icon-container'>
<UserIcon className='icon'/>
</div>
<div className='icon-container'>
<DotsCircleHorizontalIcon className='icon'/>
</div>
        </div>
        <div className='flex items-center justify-center h-16 w-16 bg-blue-400 rounded-full hover:bg-blue-400/70 mt-4 md:-ml-1 '>
             <button className="text-2xl text-4xl mb-2 text-white">+</button>  
        </div>
        <div className='icon-container  mt-12 ml-2 md:ml-0'>
            <Image src={user} width={50} height={50} className="rounded-full p-2"/>
        </div>
    </div>
  )
}

export default Sidebar