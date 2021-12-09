import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../images/img121.png'
import img2 from '../images/img123.png'
import img3 from '../images/img125.png'

const Project12 = () => {
    return (
        <div className='my-5 text-center'>
            <h2 className='my-5'>TIZZY SUNGLASS</h2>
            <Container>
                <Row>
                <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12} md={12}>
                                <Card>
                                <Card.Img variant="top" src={img1} />
                                </Card>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col xs={6} md={6}>
                                <Card>
                                <Card.Img variant="top" src={img2} />
                                </Card>
                                </Col>
                                <Col xs={6} md={6}>
                                <Card>
                                <Card.Img variant="top" src={img3} />
                                </Card>
                                </Col>
                             </Row>
                    </Col>
                    <Col xs={12} md={6}>
                    <div>
                        <h5>
                        <ul>
                            <li>1. Complete web application with dynamic products, admin panel, review, dashboard.</li>
                            <li>2. Firebase Authentication and Hosting</li>
                            <li>3.Users can also make orders, cancel orders and also give a review, and admin can add or delete products and create new admin.</li>
                            <li>4. Technology Used: Javascript, React, Node Js, MongoDB,  Axios, Material UI, Firebase. </li>
                        </ul>
                        </h5>
                        <h4><a href="https://assignment12-fd267.web.app/">Live Site Link</a></h4>
                        <h4><a href="https://github.com/Mithu-12/assignment-12">Client Site  Code Link</a></h4>
                        <h4><a href="https://github.com/Mithu-12/assignment-12-server-site">Server Site Code Link</a></h4>
                     </div>
                    </Col>
                    
                </Row>
                </Container>
        </div>
    );
};

export default Project12;