import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'

const Header = () => {
  return (
    <div className='text-white flex items-center justify-between ml-8 h-20 mt-2 min-w-[450px] lg:min-w-[600px]  max-w-[800px] '>
        <div className=' tracking-wider font-semibold text-[22px] lg:text-[26px] '>Home</div>
        <div className='icon-container mr-2'>
        <SparklesIcon className='text-white h-8 '/>
        </div>
    </div>
  )
}

export default Header