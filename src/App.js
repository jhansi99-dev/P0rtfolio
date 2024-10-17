// src/App.js
import ProjectsSection from './components/Projects/ProjectsSection'; // Import ProjectsSection
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'; // Importing Navbar
import Home from './components/Home/Home';       // Importing Home
import Footer from './components/Footer/Footer'; 
import './App.css'; // Your main app CSs
import About from './components/About/About new';
import Resume from './components/Resume/Resume'; // Import the Resume component
import Preloader from './components/Preloader/Preloader';;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // Simulate loading time (e.g., fetch data, resources)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Adjust time as needed
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <Preloader />;
  }
    return (
      <Router>
        <div className="app">
        <Navbar />
          <div className='main-content'>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<ProjectsSection/>} />
          <Route path="/resume" element={<Resume />} />
          </Routes>
          </div>
         <Footer />
   </div>
          </Router>
          
           
     
    );
  };

export default App;


