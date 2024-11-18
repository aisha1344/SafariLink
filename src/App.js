import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import SDWANDetail from './Components/ServicesCom/SDWAN/SDWANDetail';
import CloudDeatail from './Components/ServicesCom/Cloud/CloudDeatail';
import MissionDetail from './Components/ServicesCom/Mission/MissionDetail';
import RemoteDetail from './Components/ServicesCom/Remote/RemoteDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/sd-wan" element={<SDWANDetail />} />
          <Route path="services/cloud" element={<CloudDeatail />} />
          <Route path="services/missioncritical" element={<MissionDetail />} />
          <Route path="services/remote-devices" element={<RemoteDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
