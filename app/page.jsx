import styles from './HomePage.module.css'
import { WindowsImageViewer } from '@/components/ImageContainer'
import { RedesLink } from '@/components/Redes'
import { ExperienceTimeLine } from '@/components/ExperienceView'
import { SkillsResume } from '@/components/SkillsView'
import { Pdf } from '@/components/PDF'



export default function HomePage () {
  return(
    <>
    <section className={styles.home}>
      <div className={styles.contentContainer}>
        <div className={styles.homeContent}>
          <h1>Hi, I&apos;m <span>Lucas Tisera</span></h1>
          <div className={styles.textAnimate}>
            <h3>Full Stack Developer</h3>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi dolorem et vero odit ipsa delectus nam. Voluptatem perspiciatis molestiae qui laudantium omnis corporis fugit numquam! Facilis eos obcaecati alias!</p>
          <div className={styles.btnContainer}>
            <a href="#" className={styles.btn}>Let&apos;s Talk</a>
            <Pdf/>
          </div>
            <RedesLink/>
        </div>
        <WindowsImageViewer/>
      </div>
    </section>
      <ExperienceTimeLine/>
      <SkillsResume/>
    </>
  )
};