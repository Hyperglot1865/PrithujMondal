import React from 'react'
import styles from '../../src/styles/Home/Sculpture.module.css'
import Image from 'next/image'

export default function Sculpture() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.left}>
            <Image className={styles.artistimg} src={'/artworks/1 (34).png'} width={1000} height={1000} alt='image'/>
        </div>
        <div className={styles.right}>
            <div className={styles.heading}>Unplanned Urbanization</div>
            <div className={styles.text}>
The transformation of villages from rural to urban, in an unplanned
way, is the subject area of my expression. Sporadic growths of the cities are engulfing not only the village landscapes but also changing the
existing pattern of the village life. Nothing is permanent in this unplanned growth of the city, as if it is acting like black holes to grasp all
the existing village settlement. It is acting as hydra head to spread its tentacles to tear apart all the age-old existing relationships.<br/> Using the
unpolished paper medium may do justify the temporariness of unplanned growth of city whereas using the broken earthen pots as the
base medium shows the remnant of village lifestyle. Fortuitously, during Shantiniketan days, we were exposed to an unadulterated village
settlement, where we could all sing ''O amar ranga matir desh'' (My
lovely red soiled county). Then my journey had begun from that beautiful village to concrete settlement. The mighty urban settlement has
pulled me like others to its perplexed socio-economic salad bowl.
Here, with each passing day new faces are coming and becoming its
section. Existing and new ones all are getting part of this every day's
new life.</div>
        </div>
        
    </div>
  )
}
