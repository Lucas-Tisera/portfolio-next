import { HomeView } from './components/HomeView'
import { ExperienceTimeLine } from '@/app/components/ExperienceView'
import { SkillsResume } from '@/app/components/SkillsView'

export default function HomePage () {
  return(
    <>
      <HomeView/>
      <ExperienceTimeLine/>
      <SkillsResume/>
    </>
  )
};

