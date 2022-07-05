import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Icofont from 'react-icofont';
const SingleService = (props) => {
    const {service}= props;
    const {title,icon,desc}= service;
    
    return (
        <Col className='text-center h-100'>
            <Card className='border-0'>
                <Card.Body>
                    <div className="icon-content mb-4">
                        <Icofont icon={icon}/>
                    </div>
                    <Card.Title className='fw-lighter fs-2'>{title}</Card.Title>
                    <Card.Text className='lh-lg'>{desc}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleService;