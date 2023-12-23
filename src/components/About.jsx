import {Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style'
import {services} from '../constants/index'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring", 0.5*index ,0.75)}
        className='w-full bg-[#111010] p-[1px] rounded-[20px] shadow-lg shadow-[#d20000]'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm s skilled and supper fast learner software developer 
        with experience in JavaScript,python and php , and expertise in libraries 
        like React, React-Native, three.js and flask, i collaborate closely with 
        clients to create efficient, scalable, and user-friendly solutions that 
        solve real world problem, and now i have intresstes in design i use illustrator and figma for UI/UX . 
        I'm a cyber sec enthusiast i play ctf . let's work 
        together to bring your ideas to life !!.  
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-12'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            index={index}
            {...service}
          />  
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");