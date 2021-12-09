import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

import { Container, Navbar } from 'react-bootstrap';


const Header = () => {
    return (

      
  <Navbar className="navmenu navbar" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
  <Container className="navitem">
      <Navbar.Brand href="#home" className="img">Mithu<span className='text-warning'> Vowmick</span></Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse className="justify-content-end">
      <NavLink to="/home" className="items">
                    <li>Home</li>
                  </NavLink>
                 <NavLink to="/about" className="items">
                    <li>About</li>
                  </NavLink>
                  <NavLink to="/services" className="items">
                  <li>Services</li>
                  </NavLink>
                  <NavLink to="/contact" className="items">
                  <li>Contact</li>
                  </NavLink>
                  
      </Navbar.Collapse>
  </Container>
  </Navbar>
      
    );
};

export default Header;










































// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Header.css'
// const Header = () => {
   
//     return (
//         <div>
//             <nav className="navbar1 active">
//                 <div className="max-width">
//                     <div className="logo"><a href="#">Mithu<span style={{color: "crimson"}}> Vowmick.</span></a></div>
//                     <ul className="menu">
//                         <NavLink to="/home" className="items"><li>Home</li></NavLink>
//                         <NavLink to="/about" className="items"><li>About</li></NavLink>
//                         <NavLink to="/services" className="items"><li>Services</li></NavLink>
//                         <NavLink to="/skills" className="items"><li>Skills</li></NavLink>
//                         <NavLink to="/contact" className="items"><li>Contact</li></NavLink>
//                         <NavLink to="terms" className="items"><li></li></NavLink>
                        
                        
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Header;