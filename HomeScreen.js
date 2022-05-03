import React from 'react'
import Header from './Header'
import WhatsHappening from './WhatsHappening'

const HomeScreen = () => {
  return (
    <div className='text-white ml-8 border-l border-gray-50/10'>
      <Header/>
      <WhatsHappening/>
    </div>
  )
}

export default HomeScreen