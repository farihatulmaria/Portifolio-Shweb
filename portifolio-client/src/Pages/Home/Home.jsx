import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from 'react';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import HireMe from '../../Components/HireMe/HireMe';
import Service from '../../Components/Service/Service';
import Skills from '../../Components/Skills/Skills';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Welcome from '../../Components/Welcome/Welcome';
import auth from '../../firebase';

function login(){
    const haveVisted = false;
    if(!haveVisted){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user.email);
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
        localStorage.setItem('haveVisted',true);
    }
}

const Home = () => {
    login()    
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