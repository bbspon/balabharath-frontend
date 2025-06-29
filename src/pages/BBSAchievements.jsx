// BBSAchievements.jsx – Page 3 of 5 (Enhanced)

import React from "react";
import { Container, Row, Col, Card, Button, Carousel, Table } from "react-bootstrap";
// import 'aos/dist/aos.css';
// import AOS from 'aos';
import { useEffect } from 'react';

const BBSAchievements = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200 });
//   }, []);

  return (
    <Container fluid className="py-5 bg-light">
      {/* Hero Banner */}
      <div className="text-center bg-dark text-white p-5">
        <h1>BBSCART & Beyond – Milestones That Matter</h1>
        <p>Every line of prompt. Every system built. Here’s the journey.</p>
      </div>

      {/* Highlight Counters */}
      <Row className="text-center my-5">
        <Col>
          <h2>10+</h2>
          <p>Projects Launched</p>
        </Col>
        <Col>
          <h2>3+</h2>
          <p>Countries Reached</p>
        </Col>
        <Col>
          <h2>5+</h2>
          <p>Roles Integrated</p>
        </Col>
        <Col>
          <h2>1000+</h2>
          <p>Prompts Delivered</p>
        </Col>
        <Col>
          <h2>1</h2>
          <p>Cinematic Universe</p>
        </Col>
      </Row>

      {/* Prompt Carousel */}
      <h2 className="text-center">Prompt Library</h2>
      <Carousel className="my-4">
        <Carousel.Item>
          <p className="text-center">CRM Hierarchy Build Prompt</p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="text-center">Fix MongoDB ID Mismatch</p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="text-center">Kaiber Scene Transition Flow</p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="text-center">Commission Logic Auto Calculator</p>
        </Carousel.Item>
      </Carousel>

      {/* Timeline with AOS */}
      <h2 className="text-center mb-4">Major Milestones</h2>
      <ul className="timeline list-unstyled mx-4">
        <li data-aos="fade-up">2021 – First Prompt Engine Concept Built</li>
        <li data-aos="fade-up">2022 – CRM Live with Partner Hierarchy</li>
        <li data-aos="fade-up">2023 – Golddex Wallet Launch</li>
        <li data-aos="fade-up">2024 – NURU Storyboarding & Render Planning</li>
        <li data-aos="fade-up">2025 – AI Agent Platform in Dev</li>
      </ul>

      {/* Project Tiles */}
      <h2 className="text-center my-5">Projects</h2>
      <Row>
        {[
          {
            title: "Founded Veetru Strategic Management Pvt. Ltd.",
            description:
              "A powerhouse of strategic innovation and business transformation, laying the foundation for cutting-edge ventures.",
          },
          {
            title: "Created BBSCART",
            description:
              "A comprehensive full-stack commerce platform integrating CRM and POS systems, designed to streamline business operations and enhance customer engagement.",
          },
          {
            title: "Preparing for launch Golldex",
            description:
              "A pioneering smart digital gold platform that revolutionizes how consumers invest and manage their gold assets digitally.",
          },
          {
            title: "Built Thiaworld",
            description:
              "A unique hybrid jewelry-fintech brand merging traditional craftsmanship with modern financial technology to offer seamless customer experiences.",
          },
          {
            title: "Developing Emerjobs",
            description:
              "A skill-first platform connecting talent to full-time, part-time, temporary, and urgent job opportunities—empowering job seekers and enabling fast, flexible hiring.",
          },
          {
            title: "Initiated NURU",
            description:
              "India’s first-ever 3D animal fantasy film IP, blending technology and storytelling to create an immersive cinematic universe.",
          },
          {
            title: "Released BBS Ocean & BBS Pro",
            description:
              "Advanced automation tools tailored for SMEs to boost productivity and operational efficiency across departments.",
          },
        ].map((project, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-bold text-primary">
                  {project.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "0.95rem", color: "#555" }}>
                  {project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Awards Section */}
      <h3>Awards & Recognition</h3>
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>Prompt Engineer – Self-Taught</Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>12-min Bug Slayer Award</Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>CRM Visionary Badge</Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>Prompt Architect Medal</Card.Body>
          </Card>
        </Col>
      </Row>

      {/* CTA Section */}
      <div className="text-center my-5">
        <h4>Want to collaborate or know more?</h4>
        <Button variant="primary" href="/contact">
          Contact Me
        </Button>
      </div>

      {/* Before vs After Comparison */}
      <h2 className="text-center my-5">Before & After</h2>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Before</th>
            <th>After</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CRM Setup</td>
            <td>Manual Forms</td>
            <td>AI-Driven Workflow</td>
          </tr>
          <tr>
            <td>Bug Fix</td>
            <td>8hrs Debug</td>
            <td>12-min Prompt Solution</td>
          </tr>
          <tr>
            <td>Commission Flow</td>
            <td>Offline Excel</td>
            <td>Live Referral + Commission Logic</td>
          </tr>
        </tbody>
      </Table>

      {/* Live Demos */}
      <h2 className="text-center my-5">Live Demos</h2>
      <Row className="text-center">
        <Col>
          <Button href="#">CRM Panel</Button>
        </Col>
        <Col>
          <Button href="#">Thiaworld Try-On</Button>
        </Col>
        <Col>
          <Button href="#">NURU Preview</Button>
        </Col>
      </Row>

      {/* Behind the Build */}
      <h2 className="text-center my-5">Behind the Build</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>CRM</Card.Title>
              <Card.Text>
                Built logic-first, prompt-powered CRM with partner hierarchy and
                tax sync.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>NURU</Card.Title>
              <Card.Text>
                Scripted and rendered an AI-powered cinematic experience with
                real-world themes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Prompt Engineering Highlights */}
      <h2 className="text-center my-5">Prompt Engineering Highlights</h2>
      <ul>
        <li>Bugfix Prompts &rarr; 95% success in &lt; 15 mins</li>
        <li>System Design Prompts for CRM, Wallet, AI App</li>
        <li>Storyboarding Prompts for Animated Films</li>
      </ul>

      {/* Leadership Quote */}
      <blockquote className="blockquote text-center mt-5">
        <p className="mb-0">
          "The future belongs to those who move first, not those who wait to
          hire."
        </p>
        <footer className="blockquote-footer">Bala Bharath J</footer>
      </blockquote>

      {/* Tech Stack */}
      <h2 className="text-center my-5">Tech Stack</h2>
      <Row className="text-center">
        {[
          "React",
          "Node.js",
          "MongoDB",
          "Bootstrap",
          "ChatGPT",
          "Runway",
          "OpenAI CLI",
          "Next.js",
        ].map((tech, i) => (
          <Col key={i} className="mb-2">
            {tech}
          </Col>
        ))}
      </Row>

      {/* Social Proof */}
      <h2 className="text-center my-5">Proof of Execution</h2>
      <ul>
        <li>GitHub Repositories with Live Projects</li>
        <li>12-min Bug Fix Screenshots (Telegram log + VSCode)</li>
        <li>Prompt Videos & Screen Recordings</li>
        <li>Client Feedback via WhatsApp / Video</li>
      </ul>
    </Container>
  );
};

export default BBSAchievements;
