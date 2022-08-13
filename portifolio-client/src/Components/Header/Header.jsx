import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css';
const Header = () => {

    // Activating the nav bar
    
    const [navbar, setNavbar] = useState(false);

    const active = () =>{
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false)
        }
    }
    
    window.addEventListener('scroll',active);

    return (
        <header>
            <Navbar expand="lg" className={navbar ? 'active' : ''}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={"https://cdn-cnofg.nitrocdn.com/aClziBUYFeXgfCgSXponaMfcfnHvlxby/assets/static/optimized/rev-60b457b/wp-content/uploads/2022/07/sajjad-logo.png"} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <MenuBar/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
/* 




 */
export default Header;