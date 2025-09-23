import { Route, Routes, Navigate } from "react-router-dom";
import Home1Light from "./pages/homePages/Home1Light";
// import Home2Light from "./pages/homePages/Home2Light";
// import Home3Light from "./pages/homePages/Home3Light";
// import Home4Light from "./pages/homePages/Home4Light";
// import Home5Light from "./pages/homePages/Home5Light";
// import Home6Light from "./pages/homePages/Home6Light";
// import Home7Light from "./pages/homePages/Home7Light";
// import Home8Light from "./pages/homePages/Home8Light";
// import Home9Light from "./pages/homePages/Home9Light";

import AboutUsLightPage from "./pages/innerPages/AboutUsLightPage";
import About2LightPage from "./pages/innerPages/About2LightPage";
import TeamLightPage from "./pages/innerPages/TeamLightPage";
import Team2LightPage from "./pages/innerPages/Team2LightPage";
import TeamDetailsLightPage from "./pages/innerPages/TeamDetailsLightPage";
import ProjectLightPage from "./pages/innerPages/ProjectLightPage";
import Project2LightPage from "./pages/innerPages/Project2LightPage";
import Project3LightPage from "./pages/innerPages/Project3LightPage";
import ProjectDetailsLightPage from "./pages/innerPages/ProjectDetailsLightPage";
import ContactUsLightPage from "./pages/innerPages/ContactUsLightPage";
import FaqLightPage from "./pages/innerPages/FaqLightPage";

import ServicesLightPage from "./pages/servicesPages/ServicesLightPage";
import Services2LightPage from "./pages/servicesPages/Services2LightPage";
import Services3LightPage from "./pages/servicesPages/Services3LightPage";
import Services4LightPage from "./pages/servicesPages/Services4LightPage";
import ServiceDetailsLightPage from "./pages/servicesPages/ServiceDetailsLightPage";

import BlogStandardLightPage from "./pages/blogPages/BlogStandardLightPage";
import BlogWithSidebarLightPage from "./pages/blogPages/BlogWithSidebarLightPage";
import Blog2ColumnLightPage from "./pages/blogPages/Blog2ColumnLightPage";
import Blog3ColumnLightPage from "./pages/blogPages/Blog3ColumnLightPage";
import BlogSingleLightPage from "./pages/blogPages/BlogSingleLightPage";
import BlogSingleWithSidebarLightPage from "./pages/blogPages/BlogSingleWithSidebarLightPage";

import NotFoundPage from "./pages/innerPages/NotFoundPage";


const Routers = () => {
  return (
    <Routes>

      {/* Redirect all default/dark paths to light versions instantly */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/about-us" element={<Navigate to="/about-us-light" replace />} />
      <Route path="/about-2" element={<Navigate to="/about-2-light" replace />} />
      <Route path="/team" element={<Navigate to="/team-light" replace />} />
      <Route path="/team-2" element={<Navigate to="/team-2-light" replace />} />
      <Route path="/team-details/:id" element={<Navigate to="/team-details-light/:id" replace />} />
      <Route path="/project" element={<Navigate to="/project-light" replace />} />
      <Route path="/project-2" element={<Navigate to="/project-2-light" replace />} />
      <Route path="/project-3" element={<Navigate to="/project-3-light" replace />} />
      <Route path="/project-details/:id" element={<Navigate to="/project-details-light/:id" replace />} />
      <Route path="/contact-us" element={<Navigate to="/contact-us-light" replace />} />
      <Route path="/faq" element={<Navigate to="/faq-light" replace />} />

      <Route path="/services" element={<Navigate to="/services-light" replace />} />
      <Route path="/services-2" element={<Navigate to="/services-2-light" replace />} />
      <Route path="/services-3" element={<Navigate to="/services-3-light" replace />} />
      <Route path="/services-4" element={<Navigate to="/services-4-light" replace />} />
      <Route path="/service-details/:id" element={<Navigate to="/service-details-light/:id" replace />} />

      <Route path="/blog-standard" element={<Navigate to="/blog-standard-light" replace />} />
      <Route path="/blog-with-sidebar" element={<Navigate to="/blog-with-sidebar-light" replace />} />
      <Route path="/blog-2-column" element={<Navigate to="/blog-2-column-light" replace />} />
      <Route path="/blog-3-column" element={<Navigate to="/blog-3-column-light" replace />} />
      <Route path="/blog-single/:id" element={<Navigate to="/blog-single-light/:id" replace />} />
      <Route path="/blog-single-with-sidebar/:id" element={<Navigate to="/blog-single-with-sidebar-light/:id" replace />} />

      {/* Light Versions */}
      <Route path="/home" element={<Home1Light />} />
      {/* <Route path="/home-2-light" element={<Home2Light />} />
      <Route path="/home-3-light" element={<Home3Light />} />
      <Route path="/home-4-light" element={<Home4Light />} />
      <Route path="/home-5-light" element={<Home5Light />} />
      <Route path="/home-6-light" element={<Home6Light />} />
      <Route path="/home-7-light" element={<Home7Light />} />
      <Route path="/home-8-light" element={<Home8Light />} />
      <Route path="/home-9-light" element={<Home9Light />} /> */}

      <Route path="/about-us-light" element={<AboutUsLightPage />} />
      <Route path="/about-2-light" element={<About2LightPage />} />
      <Route path="/team-light" element={<TeamLightPage />} />
      <Route path="/team-2-light" element={<Team2LightPage />} />
      <Route path="/team-details-light/:id" element={<TeamDetailsLightPage />} />
      <Route path="/project-light" element={<ProjectLightPage />} />
      <Route path="/project-2-light" element={<Project2LightPage />} />
      <Route path="/project-3-light" element={<Project3LightPage />} />
      <Route path="/project-details-light/:id" element={<ProjectDetailsLightPage />} />
      <Route path="/contact-us-light" element={<ContactUsLightPage />} />
      <Route path="/faq-light" element={<FaqLightPage />} />

      <Route path="/services-light" element={<ServicesLightPage />} />
      <Route path="/services-2-light" element={<Services2LightPage />} />
      <Route path="/services-3-light" element={<Services3LightPage />} />
      <Route path="/services-4-light" element={<Services4LightPage />} />
      <Route path="/service-details-light/:id" element={<ServiceDetailsLightPage />} />

      <Route path="/blog-standard-light" element={<BlogStandardLightPage />} />
      <Route path="/blog-with-sidebar-light" element={<BlogWithSidebarLightPage />} />
      <Route path="/blog-2-column-light" element={<Blog2ColumnLightPage />} />
      <Route path="/blog-3-column-light" element={<Blog3ColumnLightPage />} />
      <Route path="/blog-single-light" element={<BlogSingleLightPage />} />
      <Route path="/blog-single-with-sidebar-light/:id" element={<BlogSingleWithSidebarLightPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routers;
