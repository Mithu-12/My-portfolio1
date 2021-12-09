import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import Header from '../Header/Header/Header';
import ProjectCarosel from '../ProjectCarosel/ProjectCarosel';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ProjectCarosel></ProjectCarosel>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;