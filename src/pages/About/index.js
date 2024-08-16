import React from 'react'
import Navbar from '../../../Components/Home/Navbar'
import Footer from '../../../Components/Home/Footer'
import { Inter } from "next/font/google";
import styles from '../../styles/About/about.module.css'
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export default function index() {
  return (
    <>
        <Navbar />
            <div className={styles.container}>
            <div>
              <Image className={styles.heroimg} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
            </div>
              <div className={styles.name}>Prithuj Mondal</div>
                <div className={styles.text}>The capacity to perceive a shadow is a faculty that is closely attached to human development. Fearing the shadow, avoiding the shadow understanding how the shadow is created, identifying one&aposs own shadow, playing with one&aposs own shadow seems to accompany humankind. There is an unseen connection be- tween human beings and the collective identity of humankind. <br/><br/>
                  
                   Today, global connections are manifest in the economy, in transportation and communication systems, and in responses to political, social and environmental crises. Some- time during this century a transition to global conflict, and thence to global coop- eration, took place. Along the way the conditions of life changed, driven by the changes, happened in social, environmental, political and economical structure, which themselves involved in global cooperation and collective actions. <br/><br/>

We, the people are standing in such an edge of human civilization where the identity as a human is distorted by several conflicts. To save human&aposs existen- tial and moral identity it is necessary to understand the nature of humankind. My attempt, as an artist is to explore human in various perspective by understanding them from inside out. In short, the theme of my artworks is heuristics, the study how people think and feel; and how, so frequently in life, they come up short of their social, political and ideological expectations. Overall, a panoramic perspective of human characters with its humor, follies and goodness is the pre- dominant part of my oeuvres.<br/><br/>

Conceptually, stream of consciousness, a style through which I directly tran- scribes the thoughts and sensations that goes through a character&aposs mind, rather than simply describing those sensations from the external standpoint of an ob- server. The experiences of the journey, called Life are often transformed into ex- pressions in my artworks. My oeuvres are an account of dedication to form an aesthetic of my own mirror related to the various shifts, circumstances and memories during the formative years to shape an identity. </div>
            
            </div>
        <Footer />
    </>
  )
}
