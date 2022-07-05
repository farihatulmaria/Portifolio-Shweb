import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PrimaryButton from '../PrimaryButton';
import './Welcome.css';
const Welcome = () => {
    return (
        <section id="home">
           <Container>
            <Row className='align-items-center'lg={2} md={1} xs={1}>
                <Col>
                    <div className="banner-content">
                        <p className='h3'>Welcome to my world</p>
                        <h1 className='fw-bold'>Hi, I'm Sajjad</h1>
                        <p>a professional web developer with more than five years of experience. I am providing Website Development & Designing, E-commerce through WordPress, Prestashop, Shopify. I am a hard worker and communicative.</p>
                        
                        <div className="banner-btn mt-4">
                            <PrimaryButton name='Hire Me' icon={'business-man-alt-2'} link={'#contact'}/>
                            <PrimaryButton buttonClass='ms-2' name='Protifolio' icon={'file-alt'}/>
                        </div>
                    </div>
                </Col>
                <Col>
                    <img className='img-fluid my-5' src="https://i.postimg.cc/W4jtXC54/Programming.jpg" alt="shweb" />
                </Col>
            </Row>
           </Container>
        </section>
    );
};

export default Welcome;