import React from 'react'
import Navbar from '../../../Components/Home/Navbar'
import Footer from '../../../Components/Home/Footer'
import styles from '../../styles/About/blog.module.css'
import Link from 'next/link';

export default function index() {
  return (
    <>
        <Navbar />
            <div className={styles.container}>
            <div className={styles.heading}>Artist-Blogs</div>
                <div className={styles.cards}>
                <Link className={styles.link} href={'/BlogPage'}>
                    <div className={styles.card}>
                        <div className={styles.topic}>Topic of the blog</div>
                        <div className={styles.text}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
                        <div className={styles.read}>read more...</div>
                    </div>
                </Link>
                <Link className={styles.link} href={'/BlogPage'}>
                    <div className={styles.card}>
                        <div className={styles.topic}>Topic of the blog</div>
                        <div className={styles.text}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
                        <div className={styles.read}>read more...</div>
                    </div>
                </Link>
                <Link className={styles.link} href={'/BlogPage'}>
                    <div className={styles.card}>
                        <div className={styles.topic}>Topic of the blog</div>
                        <div className={styles.text}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
                        <div className={styles.read}>read more...</div>
                    </div>
                </Link>
                <Link className={styles.link} href={'/BlogPage'}>
                    <div className={styles.card}>
                        <div className={styles.topic}>Topic of the blog</div>
                        <div className={styles.text}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
                        <div className={styles.read}>read more...</div>
                    </div>
                </Link>
                <Link className={styles.link} href={'/BlogPage'}>
                    <div className={styles.card}>
                        <div className={styles.topic}>Topic of the blog</div>
                        <div className={styles.text}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
                        <div className={styles.read}>read more...</div>
                    </div>
                </Link>
                <Link className={styles.link} href={'/BlogPage'}>
                    <div className={styles.card}>
                        <div className={styles.topic}>Topic of the blog</div>
                        <div className={styles.text}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
                        <div className={styles.read}>read more...</div>
                    </div>
                </Link>
                <Link className={styles.link} href={'/BlogPage'}>
                    <div className={styles.card}>
                        <div className={styles.topic}>Topic of the blog</div>
                        <div className={styles.text}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
                        <div className={styles.read}>read more...</div>
                    </div>
                </Link>
                <Link className={styles.link} href={'/BlogPage'}>
                    <div className={styles.card}>
                        <div className={styles.topic}>Topic of the blog</div>
                        <div className={styles.text}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
                        <div className={styles.read}>read more...</div>
                    </div>
                </Link>
                <Link className={styles.link} href={'/BlogPage'}>
                    <div className={styles.card}>
                        <div className={styles.topic}>Topic of the blog</div>
                        <div className={styles.text}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor.</div>
                        <div className={styles.read}>read more...</div>
                    </div>
                </Link>
                </div>
            </div>
        <Footer />
    </>
  )
}
