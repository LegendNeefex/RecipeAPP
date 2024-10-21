import React from 'react'
import TopBar from './Homepage/TopBar'
import Banner from './Homepage/Banner';
import About from './Homepage/About';
import Section from './Homepage/Section';
import Footer from './Homepage/Footer';

function LandingPage() {
  return (
    <>
      <TopBar />
      <Banner />
      <About />
      <Section />
      <Footer />
    </>
  )
}

export default LandingPage;