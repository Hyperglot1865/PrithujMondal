import React from 'react'
import styles from "../../src/styles/Home/Navbar.module.css"
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.logo}><div className={styles.initials}>LS</div><div className={styles.name}>Lorem Ipsum</div></div>
            <ul className={styles.list}>
                <Link className={styles.link} href={'/'}>Home</Link>
                <Link className={styles.link} href={'/Exhibitions'}>Exhibitions</Link>
                <li>Virtual Gallery</li>
                <Link className={styles.link} href={'/News&Events'}>News and Event</Link>               
                <Link className={styles.link} href={'/About'}>About</Link>
                <Link className={styles.link} href={'/Blog'}>Blog</Link>
            </ul>
    </div>
  )
}
