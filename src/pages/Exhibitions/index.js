import React from 'react'
import Navbar from '../../../Components/Home/Navbar'
import Footer from '../../../Components/Home/Footer'
import Timeline from '../../../Components/Timeline/Timeline'
import styles from '../../styles/About/Exhibition.module.css'

export default function index() {
  return (
    <>
        <Navbar/>
        <div className={styles.container}>
        <div className={styles.heading}>Exhibitions</div>
            <Timeline />
        </div>
        <Footer/>
    </>
  )
}
