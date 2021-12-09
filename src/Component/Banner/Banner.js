import React, {useState} from 'react';
import logo from '../images/Bannerbackground.jpg'
import './Banner.css'
import jsPDF from 'jspdf'
import TypeWriter from 'typewriter-effect';
import Button from '@restart/ui/esm/Button';
import pdf from './Mithu.pdf'
import Particles from 'react-tsparticles';

const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    const [state] = useState({
            title: "Hello, ",
            title2: "My name is",
            title3: "Mithu Vowmick"
    })
    return (
        <div>

            
            <div className='banner' style={{background: `url(${logo}) center no-repeat`}}>
            <div className="max-width">
                <div className="banner-content">
                    <div className="text-1">{state.title} </div>
                    <div className="text-3">{state.title2}</div>
                    <div className="text-2">{state.title3}</div>
                    
                </div>
                <div className="text">
                    <TypeWriter
                    options={{autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        'I am a web developer',
                        'I am a web deginer',
                        'I am a frelancer'
                    ],
                }}
                    />
                </div>
                {/* <Button onClick={this.pdfGenerator}></Button> */}
                <a href={pdf} download>Download Resume<span></span></a>
            </div>
        </div>
        </div>
    );
};

export default Banner;