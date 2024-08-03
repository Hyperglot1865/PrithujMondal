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
              <Image className={styles.heroimg1} src={'/Hero/Heroimage.jpg'} width={1000} height={1000} alt='image'/>
            </div>
              <div className={styles.name}>Event Heading</div>
                <div className={styles.text}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor. Fames varius placerat lacinia finibus urna per. Risus torquent ultricies commodo sed etiam. Eu senectus ridiculus felis enim malesuada. Hac torquent varius ad fusce vehicula conubia blandit per. Mattis fames imperdiet tincidunt pellentesque lacinia duis. Litora porta vitae tempor class finibus elementum. <br/> <br/>

Diam per feugiat natoque vel hac nullam vestibulum amet. Dapibus rutrum purus; et donec quis sapien. Ultricies nulla vel odio scelerisque, morbi efficitur maecenas vitae. Iaculis consectetur hendrerit mollis; tellus nascetur aptent. Vel dignissim suspendisse maximus ipsum sociosqu sem. Bibendum imperdiet maximus tincidunt habitant risus mollis natoque cursus in. Condimentum ligula sit fringilla fames eget nam consequat. Rhoncus tempus aliquam risus ad convallis; penatibus parturient velit orci. <br/> <br/>

Consequat nec inceptos maximus, potenti nunc neque torquent. Feugiat facilisis enim pulvinar eu senectus. Auctor dignissim duis torquent a molestie hac convallis vehicula. Finibus justo mauris et vulputate dui metus. Rutrum litora volutpat sagittis sem eget. Imperdiet laoreet eget, dictumst felis potenti laoreet libero montes. Id mollis class cubilia cubilia felis morbi mauris ex. Lectus condimentum habitant taciti et suscipit etiam ligula. <br/> <br/>

Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor. Fames varius placerat lacinia finibus urna per. Risus torquent ultricies commodo sed etiam. Eu senectus ridiculus felis enim malesuada. Hac torquent varius ad fusce vehicula conubia blandit per. Mattis fames imperdiet tincidunt pellentesque lacinia duis. Litora porta vitae tempor class finibus elementum. <br/> <br/>

Diam per feugiat natoque vel hac nullam vestibulum amet. Dapibus rutrum purus; et donec quis sapien. Ultricies nulla vel odio scelerisque, morbi efficitur maecenas vitae. Iaculis consectetur hendrerit mollis; tellus nascetur aptent. Vel dignissim suspendisse maximus ipsum sociosqu sem. Bibendum imperdiet maximus tincidunt habitant risus mollis natoque cursus in. Condimentum ligula sit fringilla fames eget nam consequat. Rhoncus tempus aliquam risus ad convallis; penatibus parturient velit orci. <br/> <br/>

Consequat nec inceptos maximus, potenti nunc neque torquent. Feugiat facilisis enim pulvinar eu senectus. Auctor dignissim duis torquent a molestie hac convallis vehicula. Finibus justo mauris et vulputate dui metus. Rutrum litora volutpat sagittis sem eget. Imperdiet laoreet eget, dictumst felis potenti laoreet libero montes. Id mollis class cubilia cubilia felis morbi mauris ex. Lectus condimentum habitant taciti et suscipit etiam ligula.<br/> <br/>

Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus suspendisse malesuada at facilisi venenatis ac donec. Augue molestie suscipit dictum sit tincidunt ac nisi sed porttitor. Fames varius placerat lacinia finibus urna per. Risus torquent ultricies commodo sed etiam. Eu senectus ridiculus felis enim malesuada. Hac torquent varius ad fusce vehicula conubia blandit per. Mattis fames imperdiet tincidunt pellentesque lacinia duis. Litora porta vitae tempor class finibus elementum. <br/> <br/>

Diam per feugiat natoque vel hac nullam vestibulum amet. Dapibus rutrum purus; et donec quis sapien. Ultricies nulla vel odio scelerisque, morbi efficitur maecenas vitae. Iaculis consectetur hendrerit mollis; tellus nascetur aptent. Vel dignissim suspendisse maximus ipsum sociosqu sem. Bibendum imperdiet maximus tincidunt habitant risus mollis natoque cursus in. Condimentum ligula sit fringilla fames eget nam consequat. Rhoncus tempus aliquam risus ad convallis; penatibus parturient velit orci. </div>
            
            </div>
        <Footer />
    </>
  )
}
