import React from 'react';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import HireMe from '../../Components/HireMe/HireMe';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import Service from '../../Components/Service/Service';
import Skills from '../../Components/Skills/Skills';
import Welcome from '../../Components/Welcome/Welcome';

const Home = () => {
    return (
        <>
            <ScrollToTop/>
            <Welcome/>
            <About/>
            <Skills/>
            <Service/>
            <HireMe/>
            <Contact/>
            <Footer/> 
        </>
    );
};

export default Home;