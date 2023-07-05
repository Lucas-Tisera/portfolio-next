import { HomeView } from './components/Views/HomeView'
import { ExperienceTimeLine } from '@/app/components/Views/ExperienceView'
import { SkillsResume } from '@/app/components/Views/SkillsView'
import { ContactView } from './components/Views/ContactView'
export default function HomePage () {
  return(
    <>
      <HomeView/>
      <ExperienceTimeLine/>
      <SkillsResume/>
      <ContactView/>
      <mark style={{display:"flex", width: "100%", alignItems:"center" , justifyContent:"center"}}>
        <h2>
          <b>
            personal projects coming soon...
          </b>
        </h2>
      </mark>
    </>
  )
};

