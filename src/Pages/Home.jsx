import React from 'react'
import HeroSection from '../Components/HeroSection'
import ServicesSection from '../Components/ServicesSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import CallToAction from '../Components/CallToAction'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <ServicesSection/>
        <WhyChooseUs/>
        <CallToAction/>
    </div>
  )
}

export default Home