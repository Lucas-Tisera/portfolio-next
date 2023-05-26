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
          <p>Hello, and welcome to my portfolio! My name is Lucas Tisera, and I am excited to share with you my skills, experiences, and accomplishments. I am a Full-Stack Developer with a passion for software development. Through this portfolio, I aim to provide you with a comprehensive understanding of who I am, the work I have done, and the value I can bring to your project or organization.</p>
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