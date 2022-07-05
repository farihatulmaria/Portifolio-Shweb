import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import PrimaryButton from '../PrimaryButton';
import Title from '../Title';

const Contact = () => {
    return (
        <section id='contact'>
            <div className="container">
                <Title name={'CONTACT'}/>
                <Row className='my-5 g-2'>
                    <Col lg={6} md={5} sm={12}>
                        <FloatingLabel controlId="floatingInput" label="Name">
                            <Form.Control type="text" placeholder="Name" />
                        </FloatingLabel>                          
                    </Col>
                    <Col lg={6} md={5} sm={12}>
                        <FloatingLabel controlId="floatingInput" label="Email" >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel> 
                    </Col>
                    <Col lg={12} sm={12}>
                        <FloatingLabel controlId="floatingInput" label="Subject" >
                            <Form.Control type="text" placeholder="Subject" />
                        </FloatingLabel> 
                    </Col>
                    <Col lg={12} sm={12}>
                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control as="textarea" placeholder="Leave a Message here" style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <PrimaryButton name={'Submit'}/>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Contact;