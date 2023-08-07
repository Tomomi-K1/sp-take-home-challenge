import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './Admin';
import SignupForm from './SignupForm';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/admin" element ={<Admin />} />
        <Route path="/signup" element ={<SignupForm />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
