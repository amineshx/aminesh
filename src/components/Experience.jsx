import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../style';
import {experiences} from '../constants';
import {SectionWrapper} from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard =({experience}) =>{
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:'black',color:'#fff'
      }}
      contentArrowStyle={{
        borderRight: '7px solid #232631'
      }}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
      <a href={`${experience.link}`}><h3 className='text-white text-[24px] font-bold'>{experience.title}</h3></a>
      <p>{experience.discription}</p>
      </div>
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>TP-GTR</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index)=>(
            <ExperienceCard 
              key={experience.index}
              experience={experience}
            /> 
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")