import React from 'react';
import About from '../../Components/About/About';
import Footer from '../../Components/Footer/Footer';
import HireMe from '../../Components/HireMe/HireMe';
import Service from '../../Components/Service/Service';
import Skills from '../../Components/Skills/Skills';
import Welcome from '../../Components/Welcome/Welcome';

const Home = () => {
    return (
        <>
            <Welcome/>
            <About/>
            <Skills/>
            <Service/>
            <HireMe/>
            <Footer/>  
        </>
    );
};

export default Home;