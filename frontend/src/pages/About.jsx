import React from 'react'
import Hero from '../components/Home/Hero'
import Biography from '../components/Home/Biography'
const About = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
}

export default About