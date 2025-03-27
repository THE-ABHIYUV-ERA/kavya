import React from 'react';
import Navbar from './Navbar/Navbar';
import HeroSection from './Hero/Hero';
import Roles from './Roles/Roles';
import Performance from './Performance/Performance';
import Alert from './Challenge/Challenge';
import Gamify from './Gamify/Gamify';
import Footer from './Footer/Footer';

function Started() {
  return (
    <React.Fragment>
      <Navbar/>
      <HeroSection/>
      <Roles/>
      <Performance/>
      <Alert/>
      <Gamify/>
      <Footer/>
    </React.Fragment>
  )
}

export default Started
