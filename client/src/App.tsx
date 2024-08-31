import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import FeedbackForm from './components/Feedback';



const App = () => {
  return (

    <div className='bg-dark text-white background'>
      <Header />
      <main>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
        <Certifications/>
        <Education/>
        <Contacts/>
        <FeedbackForm/>
      </main>
      <Footer />
    </div>

  );
};
export default App;