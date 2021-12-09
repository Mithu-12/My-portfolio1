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
            title3: "Mithu Vowmick",
            title4: "I am a "
    })
    return (
        <div>
           
    <Particles style={{'display': 'block'}}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 40,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 1,
              opacity: 0.5,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.3,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1100,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />

            <div className='banner' style={{background: `url(${logo}) center no-repeat`}}>
            <div className="max-width">
                <div className="banner-content">
                    <div className="text-1">{state.title} </div>
                    <div className="text-3">{state.title2}</div>
                    <div className="text-2">{state.title3}</div>
                    <div style={{'display': 'inline'}} className="text">{state.title4}
                    <p style={{'display': 'inline-block'}} className="text text-danger">
                    <TypeWriter
                    options={{autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        'Web developer',
                        'Front End Developer',
                        'MERN Stack Developer',
                    ],
                }}
                    />
                </p>
                    </div>
                    
                </div>
                
                {/* <Button onClick={this.pdfGenerator}></Button> */}
                <a className='button' style={{'text-decoration': 'none'}} href={pdf} download>Download Resume<span></span></a>
            </div>
        </div>
        </div>
    );
};

export default Banner;