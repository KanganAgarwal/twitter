import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

import HomeScreen from '../components/HomeScreen'
export default function Home() {
  return (
    <div className='flex '>
      <Sidebar/>
      <HomeScreen/>
    </div>
  )
}
