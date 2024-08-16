import data from '../api/artworks';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/About/artwork.module.css';
import Navbar from '../../../Components/Home/Navbar';
import Footer from '../../../Components/Home/Footer';
import Image from 'next/image';

export default function Art() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            const foundProduct = data.find((item) => item.id == id);
            if (foundProduct) {
                setProduct(foundProduct);
            }
        }
    }, [id]);

    if (!product) {
        return (
            <>
                <Navbar />
                <div className={styles.container}>
                    <div className={styles.heading}>Loading...</div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div>
                    <Image 
                        className={styles.img} 
                        src={product.url} 
                        width={500} 
                        height={500} 
                        alt={product.name} 
                    />
                </div>
                
                <div className={styles.right}>
                    <div className={styles.heading}>Artworks</div>
                    <div className={styles.text}><b>Title: </b>{product.name}</div>
                    <div className={styles.text}><b>Size: </b>{product.size}</div>
                    <div className={styles.text}><b>Medium: </b>{product.medium}</div>
                    <div className={styles.text}><b>Year: </b>{product.year}</div>
                </div>
            </div>
            <Footer />
        </>
    );
}
