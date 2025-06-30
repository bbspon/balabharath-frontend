import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MeetPage from './pages/MeetPage';
import BBSAchievements from './pages/BBSAchievements';
import GalleryPage from './pages/GalleryPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';
import AppointmentPage from './pages/AppointmentPage';
import NotFoundPage from "./pages/NotFoundPage";
import BusinessOpportunities from "./pages/BusinessOpportunities";
import CMSAdminPanel from './pages/CMSAdminPanel';
import Story from './pages/Story';
import AuthPage from './pages/AuthPage';
import Press from "./pages/Press";
import Vision from "./pages/Vision";
import Philosophy from "./pages/Philosophy";
import Interviews from "./pages/Interviews";
import ProjectsDetailsPage from './pages/ProjectsDetailsPage';
import "@fortawesome/fontawesome-free/css/all.min.css";
import CollaboratePage from './pages/Collaborate';
import AnimationHomePage from './pages/AnimationHomePage';
import ServicesSection from './pages/ServicesSection';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AnimationHomePage />} />
          <Route path="/meet" element={<MeetPage />} />
          <Route path="/bbs-achievements" element={<BBSAchievements />} />
          <Route path="/press" element={<Press />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/ceo-vision" element={<Vision />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appoinment" element={<AppointmentPage />} />
          <Route path="/project-details" element={<ProjectsDetailsPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="/his-story" element={<Story />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/services" element={<ServicesSection />} />

          
          <Route
            path="/businessOpportunities"
            element={<BusinessOpportunities />}
          />
          <Route path="/cmsAdminpanel" element={<CMSAdminPanel />} />
          <Route path="/collaborate" element={<CollaboratePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
