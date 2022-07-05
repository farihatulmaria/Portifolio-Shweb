import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Icofont from 'react-icofont';
import './SingleService.css'
const SingleService = (props) => {
    const {service}= props;
    const {title,icon,desc}= service;
    
    return (
        <Col className=' text-center h-100'>
            <Card>
                <Card.Body>
                    <div className="icon-content">
                        <Icofont icon={icon}/>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleService;