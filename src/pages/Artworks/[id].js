import { useRouter } from 'next/router';
import data from '../api/artworks'
import React from 'react'
import styles from '../../styles/About/artwork.module.css'
import Navbar from '../../../Components/Home/Navbar';
import Footer from '../../../Components/Home/Footer';
import Image from 'next/image';

export default function artwork() {
    const router = useRouter();
    const { id } = router.query;
    let product = [];

    data.map((data) => {
        if(data.id == id){
          product.push(data);
        }
      })

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
        <div>
            <Image className={styles.img} src={product[0].url} width={500} height={500} alt='image'/>
        </div>
        
        <div className={styles.right}>
        <div className={styles.heading}>Artworks</div>
            <div className={styles.text}><b>Title: </b>{product[0].name}</div>
            <div className={styles.text}><b>Size: </b>{product[0].size}</div>
            <div className={styles.text}><b>Medium: </b>{product[0].medium}</div>
            <div className={styles.text}><b>Year: </b>{product[0].year}</div>
        </div>
    </div>

    <Footer/>
    </>
  )
}
