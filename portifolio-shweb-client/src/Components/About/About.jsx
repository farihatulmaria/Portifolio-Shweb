import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Icofont from 'react-icofont';
import PrimaryButton from '../PrimaryButton';
import Title from '../Title';
import './About.css';
const About = () => {
    return (
        <section className='bg-gray' id='about'>
            <Container>
                <Col md={12} className='my-5'>
                    <Title name={'ABOUT ME'}/>
                </Col>
                <Row className='g-5' lg={2} md={1} xs={1}>
                    <Col>
                        <div className="about-me mb-3">
                            <p>Hello! My home town is Mymenshing, Bangladesh. Recently I have completed my Bsc. Honours in computer science. I started web design and development after 2010 and have enjoyed working as a freelancer. I am skilled in HTML, CSS,Java script,jQuery, PHP-MySQL, WordPress , WordPress theme development, Plugin development, Prestashop. I try to learn a new skill every day and I am so passionate about my work that I won't give up until I am fully satisfied with the work. Now I am currently available for freelance work. Lots of professional website design companies can provide 'cool' web designs and website design services - but for a high price.</p>
                            <PrimaryButton name='Hire Me' icon={'business-man-alt-2'}/>
                        </div>
                    </Col>
                    <Col>
                        <div className="about-contact">
                            <p><Icofont icon='envelope-open'/> Email: info@shweb.me</p>
                            <p><Icofont icon='brand-whatsapp'/> WhatsApp: +1(774)3617616</p>
                            <p><Icofont icon='google-map'/> Address: 345, Green Road, Dhaka, Bangladesh</p>
                        </div>
                        <div className="social-icons my-5">
                            <h3 className="my-5 ms-2 fw-bold">Follow Me :</h3>
                            <Icofont icon='facebook'/>
                            <Icofont icon='twitter'/>
                            <Icofont icon='linkedin'/>
                            <Icofont icon='pinterest'/>
                            <Icofont icon='github'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;