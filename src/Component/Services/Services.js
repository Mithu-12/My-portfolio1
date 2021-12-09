import React,{useEffect} from 'react';
import './Services.css'
import 'aos/dist/aos.css'
import Aos from 'aos'

const Services = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <div>
            <div className='services'>
        <div className='mb-5'>
        <h2 className="title my-5 text-center">My Service</h2>
        </div>
        <div className="max-width">
           <div className="service-content">
            <div className="container">
                <div className="row ">
                    <div className="card1  col-sm-12  col-md-4">
                        <div data-aos='fade-right' className="box mr-2">
                            <i className="fas fa-paint-brush"></i>
                            <h3>Web Design</h3>
                            <h5>I have one year experience to development. I work at react.js, javascript, mongodb, nodejs, </h5>
                        </div>
                    </div>
                    <div className=" card1 col-sm-12 col-md-4">
                        <div data-aos='fade-up' className="box">
                            <i className="fas fa-paint-brush"></i>
                            <h3>Bloger</h3>
                            <h5>Blog is comming soon . </h5>
                        </div>
                    </div>
                    <div className=" card1 col-sm-12 col-md-4">
                        <div data-aos='fade-left' className="box">
                            <i className="fas fa-code"></i>
                            <h3>Web Development</h3>
                            <h5></h5>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Services;