import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Icofont from 'react-icofont';
import './Footer.css';
const Footer = () => {
    return (
        <footer className='bg-gray'>
            <Container>
                <Col className='text-center'>
                    <div className="footer-logo">
                        <img width={200} height={200} src="https://cdn-cnofg.nitrocdn.com/aClziBUYFeXgfCgSXponaMfcfnHvlxby/assets/static/optimized/rev-1da91c6/wp-content/uploads/2021/10/logo-circle.png" alt="" />
                    </div>
                    <div className="social-icons my-5">
                            <Icofont icon='facebook'/>
                            <Icofont icon='twitter'/>
                            <Icofont icon='linkedin'/>
                            <Icofont icon='pinterest'/>
                            <Icofont icon='github'/>
                    </div>
                    <div className="copy-right">
                        <p>
                            @ <a href="https://shweb.me/" style={{color:'#00af91'}}>SHWEB</a> – all Rights Reserved
                        </p>
                    </div>
                </Col>
            </Container>
        </footer>
    );
};

export default Footer;