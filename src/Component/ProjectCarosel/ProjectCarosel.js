import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../images/img121.png';
import img2 from '../images/img111.png';
import img3 from '../images/img101.png';
import Button from '@restart/ui/esm/Button';
import { NavLink } from 'react-router-dom';

const ProjectCarosel = () => {
    return (
        <div className="container my-5">
            <h2 className="my-5 text-center">My Projects</h2>
           <Row xs={1} md={3} className="g-4">
  
    <Col>
      <Card data-aos='fade-right'>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title className="text-center">TIZZY</Card.Title>
          <Card.Text>
          Responsive MERN Stack app and Implement Admin Management Page,Implement Authentication System with Firebase,Faced c a challenge to improve the Admin Management page.
          </Card.Text>
          <NavLink to='/project12'>
          <Button className='btn btn-primary' variant="primary">Details</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  
    <Col>
      <Card data-aos='fade-down'>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title className="text-center">AVENTURA</Card.Title>
          <Card.Text>
          A good tour website became a good Responsive a MERN stack website, Faced c a challenge to improve the Admin Management page and at last solve this after 1days of practice.
          </Card.Text>
          <NavLink to='/project11'>
          <Button className='btn btn-primary' variant="primary">Details</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  
    <Col>
      <Card data-aos='fade-left'>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title className="text-center">HitUP GYM CLUB</Card.Title>
          <Card.Text>
          Implement two Authentication system like, email-password and Google Sign in,Fully Responsive for mobile, tablet and desktop version.Implements Context API, React Hooks, Custom Hooks.
          </Card.Text>
          <NavLink to='/project10'>
          <Button className='btn btn-primary' variant="primary">Details</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  
</Row> 
        </div>
    );
};

export default ProjectCarosel;