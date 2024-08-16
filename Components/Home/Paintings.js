import React from 'react'
import styles from '../../src/styles/Home/Paintings.module.css'
import Image from 'next/image'
import artdata from '../../src/pages/api/artworks'
import Link from 'next/link'

export default function Paintings() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.heading}>Paintings</div>
        <div className={styles.flex}>

            {artdata.slice(0,4).map(data=><Link href={`/Artworks/${data.id}`}>
            <div className={styles.card}>
                <Image className={styles.heroimg} src={data.url} width={500} height={500} alt='image'/>
                <div className={styles.info}>
                    <div className={styles.name}>{data.name}</div>
                    <button className={styles.btn}>View All</button>
                </div>
            </div>
            </Link>)}
        </div>
    </div>
  )
}
