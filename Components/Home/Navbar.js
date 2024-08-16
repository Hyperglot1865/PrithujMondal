import React, { useState } from 'react'
import styles from "../../src/styles/Home/Navbar.module.css"
import Menu from '../Navbar/Menu'
import Link from 'next/link'

export default function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.logo}><div className={styles.initials}>PM</div><div className={styles.name}>PRITHUJ MONDAL</div></div>
            <ul className={open ? `${styles.list}` : `${styles.olist}`}>
                <Link className={styles.link} href={'/'}>Home</Link>
                <Link className={styles.link} href={'/Exhibitions'}>Exhibitions</Link>
                {/* <li>Virtual Gallery</li> */}
                <Link className={styles.link} href={'/Gallery'}>Gallery</Link>  
                <Link className={styles.link} href={'/News&Events'}>News and Event</Link>               
                <Link className={styles.link} href={'/About'}>About</Link>
                <Link className={styles.link} href={'/Blog'}>Blog</Link>
            </ul>
            <div onClick={()=>setOpen(!open)} className={styles.menu}>
              <Menu />
            </div>
    </div>
  )
}
