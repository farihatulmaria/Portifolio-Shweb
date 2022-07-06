import React from 'react';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import HireMe from '../../Components/HireMe/HireMe';
import Service from '../../Components/Service/Service';
import Skills from '../../Components/Skills/Skills';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Welcome from '../../Components/Welcome/Welcome';

const Home = () => {
    return (
        <>
            <Welcome/>
            <About/>
            <Skills/>
            <Service/>
            <Testimonial/>
            <HireMe/>
            <Contact/>
            <Footer/> 
        </>
    );
};

export default Home;