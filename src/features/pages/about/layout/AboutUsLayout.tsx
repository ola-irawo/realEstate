import React from 'react'
import AboutHero from '../sections/aboutHero/AboutHero'
import Mission from '../sections/mission/Mission'
import WhyChooseUs from '../sections/whyChooseUs/WhyChooseUs'
import ContactForm from '@/component/contactForm/ContactForm'

const AboutUsLayout = () => {
  return (
    <div>
      <AboutHero />
      <Mission />
      <WhyChooseUs />
      <ContactForm />
    </div>
  )
}

export default AboutUsLayout
