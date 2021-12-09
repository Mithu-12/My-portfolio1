import Button from '@restart/ui/esm/Button';
import React, { useRef } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css'
import image from '../images/Bannerbackground.jpg'


const Contact = () => {
    const form = useRef();
    function setEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_r9hul0p', 'template_h2tfms2', form.current, 'user_6KHG8eNSak90qwmK4etX8')
          .then((result) => {
              console.log(result.text);
              alert('send to Success')
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <div className="mt-5  contact" style={{background: `url(${image}) center no-repeat`}}>
           <div className="container">
               <h2 data-aos='fade-down' className="text-center mt-4">Contact with me</h2>
           <Row className="contact-width">
            <Col xs={12} md={6}>
              <div className="myInfo">
                  <div data-aos='fade-up' className="my-3">
                  <div className="info ">
                  <i class="fas fa-mobile"></i>
                      <h4 className="d-inline ms-5 my-4">+880 1812681407</h4>
                  </div>
                  </div>
                  <div data-aos='fade-up' className="my-3">
                  <div className="info">
                  <i class="fas fa-envelope-square"></i>
                      <h4 className="d-inline ms-5 my-4">Mithuvowmick96@gmial.com</h4>
                  </div>
                  </div>
                  <div data-aos='fade-up' className="my-3">
                  <div className="info">
                  <i class="fab fa-linkedin"></i>
                      <h4 className="d-inline ms-5 my-4 text-dark"><a href="https://www.linkedin.com/in/mithu-vowmick-89a57a205/">Linkedin</a></h4>
                  </div>
                  </div>
                  <div data-aos='fade-up' className="my-3">
                  <div className="info">
                  <i class="fas fa-map-marker-alt"></i>
                      <h4 className="d-inline ms-5 my-4">Noakhali, Bangladesh.</h4>
                  </div>
                  </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
            <Form ref={form} onSubmit={setEmail}>
                 <Form.Group data-aos='fade-down' className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label><br/>
                        <Form.Control type="name" placeholder="Enter your name" name='name' />
                         </Form.Group>
                 <Form.Group data-aos='fade-down' className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label><br/>
                        <Form.Control type="email" placeholder="name@example.com" name="from_name" />
                         </Form.Group>
                         <Form.Group data-aos='fade-down' className="mb-3" controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Example textarea</Form.Label><br/>
                    <Form.Control as="textarea" rows={3} name="message" />
                </Form.Group >
                <Button data-aos='fade-down' className="btn btn-primary" variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </Col>
          </Row>
           </div>
        </div>
    );
};

export default Contact;
        