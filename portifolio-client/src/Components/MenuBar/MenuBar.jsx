import React from 'react';
import { Nav } from 'react-bootstrap';
import './MenuBar.css';
const MenuBar = () => {
    return (
        <>
            <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skill">Skill</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </>
    );
};

export default MenuBar;