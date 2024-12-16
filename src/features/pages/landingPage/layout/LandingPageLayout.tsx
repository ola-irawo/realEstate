import React from 'react'
import LandingPageHero from '../sections/landingPageHero/LandingPageHero'
import IntroVideo from '../sections/introVideo/IntroVideo'
import PropertiesOption from '../sections/propertiesOptions/PropertiesOption'
import RecentProperties from '../sections/recentPropeties/RecentProperties'
import Services from '../sections/services/Services'
import Testimonials from '../sections/testimonials/Testimonials'
import ContactForm from '@/component/contactForm/ContactForm'

const LandingPageLayout = () => {
  return (
    <>
      <LandingPageHero />
      <PropertiesOption />
      <IntroVideo />
      <RecentProperties />
      <Services />
      <Testimonials />
      <ContactForm />
    </>
  )
}

export default LandingPageLayout
