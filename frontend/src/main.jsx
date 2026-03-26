import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes, Route  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import Navbar from './landingpage/navbar';
import Footer from "./landingpage/footer";
import Homepage from "./landingpage/home/homepage";
import AboutPage from "./landingpage/about/AboutPage";
import Service from './landingpage/services/hero';
import Project from './landingpage/projects/Project';
import Techpage from './landingpage/tech/techpage';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
     <Route path="/"  element={<Homepage/>}/>
     <Route path="/About" element={<AboutPage/>}/>
     <Route path="/Services" element={<Service/>}/>
     <Route path="/Projects" element={<Project/>}/>
     <Route path="/Tech" element={<Techpage/>}/>
     
    </Routes>
    <Footer/>
  </BrowserRouter>,
)
