import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Security from './pages/Security';
import Team from './pages/Team';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Gallery from './pages/Gallery';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import HIPAACompliance from './pages/legal/HIPAACompliance';
import ISOCertifications from './pages/legal/ISOCertifications';
import SecurityArchitecture from './pages/legal/SecurityArchitecture';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="security" element={<Security />} />
          <Route path="team" element={<Team />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Legal & Security Routes */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="hipaa-compliance" element={<HIPAACompliance />} />
          <Route path="iso-certifications" element={<ISOCertifications />} />
          <Route path="security-architecture" element={<SecurityArchitecture />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
