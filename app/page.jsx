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
    </>
  )
};

