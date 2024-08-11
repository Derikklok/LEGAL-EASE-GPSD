import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Registration from './Registration.jsx';
import { Button } from './components/ui/button';
import Sign from './Sign.jsx';



function App() {
  const location = useLocation(); // Get the current route location

  return (
    <>
      <div>
        {/* Conditionally render Navbar based on the current path */}
        {location.pathname !== '/registration' && <Navbar />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </div>

      <div>
      
      </div>
    </>
  );
}

function Home() {

}

export default App;
  