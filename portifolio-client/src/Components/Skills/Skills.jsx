import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import Title from '../Title';
import './Skills.css';
const Skills = () => {
    return (
        <section id='skill'>
            <Container>
                <Col className='my-5'>
                    <Title name={'MY SKILLS'}/>
                </Col>
                <Row xs={1} md={1} lg={2}>
                    <Col>                        
                        <div className="skills-bar">
                            <h3>Web Design <span>99%</span></h3>
                            <ProgressBar striped now={99} />

                            <h3>Web Development <span>95%</span></h3>
                            <ProgressBar striped now={95} />

                            <h3>WordPress <span>100%</span></h3>
                            <ProgressBar striped now={100} />
                        </div>
                    </Col>
                    <Col>
                        <div className="skills-bar">
                            <h3>WordPress Speed Optimization <span>100%</span></h3>
                            <ProgressBar striped now={100} />

                            <h3>Shopify, Prestashop, Kajabi <span>100%</span></h3>
                            <ProgressBar striped now={100} />

                            <h3>Server Configuration <span>100%</span></h3>
                            <ProgressBar striped now={100} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;