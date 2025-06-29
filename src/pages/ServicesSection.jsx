// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaMobileAlt, FaLaptopCode, FaSearch, FaBullhorn,
  FaReact, FaNodeJs, FaLaravel, FaAws, FaFigma,FaCss3Alt,FaPalette ,FaCode,FaCloud,FaPython, FaJava
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql, SiFirebase, SiExpress, SiJavascript, SiFlutter } from "react-icons/si";

import NavbarCommon from './NavbarCommon';

const services = [
  {
    title: "App Development",
    desc: "Native and cross-platform mobile apps using Flutter & React Native.",
    icon: <FaMobileAlt />
  },
  {
    title: "Web Development",
    desc: "Responsive websites and scalable web apps using React, Node, Laravel.",
    icon: <FaLaptopCode />
  },
  {
    title: "SEO Optimization",
    desc: "Boost visibility and ranking on Google with on-page and off-page SEO.",
    icon: <FaSearch />
  },
  {
    title: "Digital Marketing",
    desc: "ROI-focused social media ads, PPC campaigns, and analytics reporting.",
    icon: <FaBullhorn />
  },
  {
    title: "UI/UX Design",
    desc: "Modern, intuitive designs using Figma, Adobe XD, and user research.",
    icon: <FaPalette />
  },
  {
    title: "E-Commerce Solutions",
    desc: "Build & scale online stores with Shopify, WooCommerce, or custom stacks.",
    icon: <FaLaptopCode />
  },
  {
    title: "CRM & ERP Systems",
    desc: "Custom internal tools to manage leads, inventory, HR, and more.",
    icon: <FaCode />
  },
  {
    title: "Cloud Services",
    desc: "Cloud hosting, deployment & DevOps with AWS, Firebase, and Netlify.",
    icon: <FaCloud />
  },
  {
    title: "Software Maintenance",
    desc: "Ongoing updates, versioning, security patches, and performance fixes.",
    icon: <FaCode />
  },
  {
    title: "API Integration",
    desc: "Third-party integrations like payment gateways, maps, SMS, etc.",
    icon: <FaCode />
  }
];


const workflow = [
  "Discover & Plan",
  "Design UI/UX",
  "Develop & Test",
  "Launch & Optimize"
];

// Tech stack grouped by category
const techStack = {
  frontend: [
    { title: "React.js", icon: <FaReact /> },
    { title: "React Native", icon: <FaReact /> },
    { title: "Next.js", icon: <SiNextdotjs /> },
    { title: "Tailwind CSS", icon: <SiTailwindcss /> },
    { title: "Bootstrap", icon: <FaCss3Alt /> },
    { title: "JavaScript", icon: <SiJavascript /> }, // Added here
  ],
  backend: [
    { title: "Node.js", icon: <FaNodeJs /> },
    { title: "Express.js", icon: <SiExpress /> },
    { title: "Laravel", icon: <FaLaravel /> },
    { title: "Python", icon: <FaPython /> }, // Added here
    { title: "Java", icon: <FaJava /> },     // Added here
  ],
  mobile: [
    { title: "Flutter", icon: <SiFlutter /> }, // New category
  ],
  devops: [
    { title: "Firebase", icon: <SiFirebase /> },
    { title: "AWS", icon: <FaAws /> },
    { title: "MongoDB", icon: <SiMongodb /> },
    { title: "MySQL", icon: <SiMysql /> },
  ],
  design: [
    { title: "Figma", icon: <FaFigma /> },
  ]
};


function Services() {
  return (
    <div>
      <NavbarCommon />

      {/* Hero Section */}
      <section className="bg text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold text-dark">Build Bold Digital Experiences</h1>
          <p className="lead text-dark">We develop software, apps, and marketing strategies for your business growth.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Our Services</h2>
          <div className="row">
            {services.map((s, i) => (
              <div className="col-md-6 col-lg-3 mb-4" key={i}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="mb-3 text-primary" style={{ fontSize: 30 }}>{s.icon}</div>
                    <h5>{s.title}</h5>
                    <p className="text-muted">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-5 text-white bg-primary">
        <div className="container text-center">
          <h2 className="mb-4">Our Workflow</h2>
          <div className="row">
            {workflow.map((step, i) => (
              <div className="col-6 col-md-3 mb-3" key={i}>
                <div className="border p-3 rounded bg-white text-dark fw-bold">{i + 1}. {step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Tech Stack We Use</h2>

          {/* Frontend */}
          <h5 className="mb-3">Frontend</h5>
          <div className="row justify-content-center mb-4">
            {techStack.frontend.map((tech, i) => (
              <div className="col-6 col-md-3 mb-3" key={i}>
                <div className="p-3 border rounded shadow-sm bg-white h-100">
                  <div className="text-primary mb-2" style={{ fontSize: 30 }}>{tech.icon}</div>
                  <strong>{tech.title}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* Backend */}
          <h5 className="mb-3">Backend</h5>
          <div className="row justify-content-center mb-4">
            {techStack.backend.map((tech, i) => (
              <div className="col-6 col-md-3 mb-3" key={i}>
                <div className="p-3 border rounded shadow-sm bg-white h-100">
                  <div className="text-primary mb-2" style={{ fontSize: 30 }}>{tech.icon}</div>
                  <strong>{tech.title}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* DevOps */}
          <h5 className="mb-3">Cloud & DevOps</h5>
          <div className="row justify-content-center mb-4">
            {techStack.devops.map((tech, i) => (
              <div className="col-6 col-md-3 mb-3" key={i}>
                <div className="p-3 border rounded shadow-sm bg-white h-100">
                  <div className="text-primary mb-2" style={{ fontSize: 30 }}>{tech.icon}</div>
                  <strong>{tech.title}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* Design */}
          <h5 className="mb-3">Design Tools</h5>
          <div className="row justify-content-center">
            {techStack.design.map((tech, i) => (
              <div className="col-6 col-md-3 mb-3" key={i}>
                <div className="p-3 border rounded shadow-sm bg-white h-100">
                  <div className="text-primary mb-2" style={{ fontSize: 30 }}>{tech.icon}</div>
                  <strong>{tech.title}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 text-white bg-dark text-center">
        <div className="container">
          <h2 className="mb-3">Have an Idea? Let's Build It.</h2>
          <p>Get a free consultation or quote today.</p>
          <a href="/contact" className="btn btn-primary btn-lg mt-3">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default Services;
