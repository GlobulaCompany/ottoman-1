// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';  
import Services from './pages/Services';  
import About from './pages/About';  
import Testimonials from './pages/Testimonials';  
import Team from './pages/Team';  
import Blog from './pages/Blog';  
import FAQs from './pages/Faqs';  
import Security from './pages/Security';


const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/services" element={<Services />} />
         <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
         <Route path="/team" element={<Team />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/faqs" element={<FAQs />} />
         <Route path="/security" element={<Security />} />
        
      </Routes>
    </Router>
  );
};

export default App;
