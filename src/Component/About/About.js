import React, {useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css'
import image from '../images/about.jpg';
import 'aos/dist/aos.css'
import Aos from 'aos'

const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <div className='my-5 container'>
            <h2 className='text-center my-5'>About Me</h2>
            <Row>
                <Col xs={12} md={6}>
                    <div data-aos='fade-right' className="aboutImg img-fluid ">
                    <img  className="img-fluid " src={image} alt="" />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                <div data-aos='fade-left'>
                    <h3>Hello, I'm <span className="text-warning">Mithu Vowmick</span></h3>
                    <h5 className='text-danger'>Junior Web Developer</h5>
                <h4 className=' mt-3'>I am front end developer. I also improve reactjs, javascript, nodejs, and mongodb. I am also MERN Stack developer.</h4>
                <h4 className=' mt-3'>Front-end professional with a newly acquired understanding of the development life-cycle as part of designing & deploying scalable applications via React, HTML, JS & CSS. Seeking a full-time position as a Front-end Developer at a reputed organization.</h4>
                </div>
                </Col>
                </Row>
        </div>
    );
};

export default About;