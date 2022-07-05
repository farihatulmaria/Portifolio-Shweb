import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';
import './Service.css';
const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
     fetch('main.json')
     .then(res => res.json())
     .then(data => setServices(data[0].Services))
    }, [])
    
    return (
        <section id='services'>
            <Container>
                <Col>
                    <div className="title">
                            <h2>MY SERVICES</h2>
                    </div>
                </Col>
                <Row lg={3} md={2} xs={1} className='my-5'>
                    {
                        services.map(service => <SingleService service={service}/>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Service;