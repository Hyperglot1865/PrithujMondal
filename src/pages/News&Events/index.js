import React from 'react'
import Navbar from '../../../Components/Home/Navbar'
import Footer from '../../../Components/Home/Footer'
import styles from '../../styles/About/events.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function index() {
  return (
    <>
        <Navbar/>
        <div className={styles.container}>
        <div className={styles.heading}>News and Events</div>
        <div className={styles.flex}>

<Link href={'/News&EventPage'} className={styles.link}>
<div className={styles.card}>
    <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
    <div className={styles.info}>
        <div className={styles.name}>Name</div>
        <div className={styles.desc}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
        <button className={styles.btn}>View All</button>
    </div>
</div>
</Link>

<Link href={'/News&EventPage'} className={styles.link}>
<div className={styles.card}>
    <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
    <div className={styles.info}>
        <div className={styles.name}>Name</div>
        <div className={styles.desc}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
        <button className={styles.btn}>View All</button>
    </div>
</div>
</Link>

<Link href={'/News&EventPage'} className={styles.link}>
<div className={styles.card}>
    <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
    <div className={styles.info}>
        <div className={styles.name}>Name</div>
        <div className={styles.desc}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
        <button className={styles.btn}>View All</button>
    </div>
</div>
</Link>

<Link href={'/News&EventPage'} className={styles.link}>
<div className={styles.card}>
    <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
    <div className={styles.info}>
        <div className={styles.name}>Name</div>
        <div className={styles.desc}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
        <button className={styles.btn}>View All</button>
    </div>
</div>
</Link>

<Link href={'/News&EventPage'} className={styles.link}>
<div className={styles.card}>
    <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
    <div className={styles.info}>
        <div className={styles.name}>Name</div>
        <div className={styles.desc}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
        <button className={styles.btn}>View All</button>
    </div>
</div>
</Link>

<Link href={'/News&EventPage'} className={styles.link}>
<div className={styles.card}>
    <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
    <div className={styles.info}>
        <div className={styles.name}>Name</div>
        <div className={styles.desc}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
        <button className={styles.btn}>View All</button>
    </div>
</div>
</Link>

<Link href={'/News&EventPage'} className={styles.link}>
<div className={styles.card}>
    <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
    <div className={styles.info}>
        <div className={styles.name}>Name</div>
        <div className={styles.desc}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
        <button className={styles.btn}>View All</button>
    </div>
</div>
</Link>

<Link href={'/News&EventPage'} className={styles.link}>
<div className={styles.card}>
    <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
    <div className={styles.info}>
        <div className={styles.name}>Name</div>
        <div className={styles.desc}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
        <button className={styles.btn}>View All</button>
    </div>
</div>
</Link>

<Link href={'/News&EventPage'} className={styles.link}>
<div className={styles.card}>
    <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
    <div className={styles.info}>
        <div className={styles.name}>Name</div>
        <div className={styles.desc}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
        <button className={styles.btn}>View All</button>
    </div>
</div>
</Link>

</div>
        </div>
        <Footer/>
    </>
  )
}