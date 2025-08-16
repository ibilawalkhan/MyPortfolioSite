import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        style={{ textAlign: 'justify' }}
      >
        I'm a Software Engineer with expertise in building full stack applications. On the backend, I have experience working with Node.js, Express.js, and NestJS, along with databases such as MongoDB, PostgreSQL, MariaDB, ClickHouse, and Redis while Frontend using React. I’ve worked extensively with microservices architecture, implemented asynchronous communication with messaging queues like RabbitMQ, containerized applications using Docker, and deployed solutions on AWS, leveraging various AWS services and third-party integrations to build scalable and efficient systems.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, omdex) => (
          <ServiceCard key={service.title} index={omdex} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")