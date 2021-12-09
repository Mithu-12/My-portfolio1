import './App.css';
import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Fragment } from 'react';
import Header from './Component/Header/Header/Header';
import About from './Component/About/About';
import Banner from './Component/Banner/Banner';
import Contact from './Component/Contact/Contact';
import ProjectCarosel from './Component/ProjectCarosel/ProjectCarosel';
import Services from './Component/Services/Services';
import Project12 from './Component/Project12/Project12';
import Project11 from './Component/Project11/Project11';
import Project10 from './Component/Project10/Project10';

function App() {
  return (
    <div className="">
      <Router>
        <Fragment>
          <Header></Header>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/banner" element={<Banner/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/projectCarosel" element={<ProjectCarosel/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/project12" element={<Project12/>}/>
          <Route exact path="/project11" element={<Project11/>}/>
          <Route exact path="/project10" element={<Project10/>}/>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
