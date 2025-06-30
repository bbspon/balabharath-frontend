// AnimationHomePage.jsx With Navbar, Carousel, Animated Cards, Extra Design Section, and Footer

import { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import AnimatedSection from "../AnimatedSection";
import HeroVideo from "../assets/HeroVideo.mp4";
import logo from "../assets/bbslog.png"; // Update path based on your file structure
import CarouselImage1 from "../assets/CarouselImage1.JPG";
import CarouselImage2 from "../assets/CarouselImage2.JPG";
import image1 from "../assets/Pose1.JPG";
import image2 from "../assets/Pose2.JPG";
import image3 from "../assets/Pose3.JPG";
import image5 from "../assets/Pose5.JPG";
import Carousel from "react-bootstrap/Carousel";
import storyPhoto from "../assets/BBSCART.JPG"; // example: your profile image
import storyDesk from "../assets/AIAgent.JPG"; // example: your desk image
import Bbscart from "../assets/BBSCART.JPG"; // Update path based on your file structure
import Delivery from "../assets/Delivery.JPG"; // Update path based on your file structure
import CRM from "../assets/CRM.svg"; // Update path based on your file structure
import EDelivery from "../assets/BBS-EDelivery.svg"; // Update path based on your file structure
import EmerJobs from "../assets/Emerjobs.svg"; // Update path based on your file structure
import PE from "../assets/POS-ERP."; // Update path based on your file structure
import Agent from "../assets/Agent.svg"; // Update path based on your file structure
import Nuru from "../assets/NURU.svg"; // Update path based on your file structure
import BBSCART from "../assets/BBSCART.svg"; // Update path based on your file structure
import ThiaWorld from "../assets/ThiaWorld.svg"; // Update path based on your file structure
import Golldex from "../assets/Golldex.svg"; // Update path based on your file structure
import useAuth from "../hooks/useAuth";

const splitHeadline = "Build the Future Together".split(" ");
const appFeatures = [
  {
    title: "BBSCART Online Shopping",
    subtitle: "BBSCART",
    image: Bbscart,
    description:
      "BBSCART Online Shopping is a multi-vendor platform uniting groceries, fashion, electronics, and gold under one cart and one wallet — powered by AI and shared with franchisees and agents. It’s not just shopping, it’s a revenue-sharing engine built for growth.",
  },
  {
    title: "Thia - Secure Gold Plan",
    subtitle: "Thiaworld Jewellery",
    description:
      "Thia Secure Gold Plan lets you own jewellery with just 40% upfront, while the remaining 60% is arranged through a trusted bank pledge. You take home the gold in your name, without any complex payments or extra charges..",
  },
  {
    title: "Golldex Integrated Payment Wallet",
    subtitle: "Golldex Wallet",
    description:
      "Golldex is an integrated payment and gold investment wallet — built for instant gold buy/sell, jewellery-linked savings, and flexible gold investment plans in one secure platform..",
  },
  {
    title: "NURU AI-Generated Movie",
    subtitle: "NURU: The Wild Rises",
    description:
      "He’s independently creating India’s first 3D hyper-realistic theatrical film,NURU — where lifelike animation meets powerful storytelling, built entirely with AI tools. It’s not just a movie; it’s a new era of filmmaking without studios — driven by vision, emotion, and technology.",
  },
  {
    title: "Virtual AI Assistant",
    subtitle: "AI Agents",
    description:
      "AI Agents are autonomous virtual assistants built to handle sales, support, research, and business operations — streamlining tasks and boosting productivity across your entire workflow..",
  },
  {
    title: "CRM Automation",
    subtitle: "CRM System",
    description:
      "Our AI-powered CRM connects every lead, sale, return, and support query across all platforms in real time. It gives franchisees, agents, and vendors full visibility and control—no guesswork, just smart, role-based insights.",
  },
  {
    title: "RetailFlow POS + ERP",
    subtitle: "POS + ERP",
    description:
      "A real-time POS and ERP system that connects in-store and online operations — streamlining billing, inventory, payments, and reporting in one smart dashboard..",
  },
  {
    title: "Smart Logistics for Last-Mile Success",
    subtitle: "Delivery App",
    image: Delivery,
    description:
      "BBS Delivery is an AI-powered delivery and logistics system designed to optimize every mile — from vendor dispatch to doorstep delivery. With real-time fleet tracking, smart route optimization, and integrated partner dashboards, it ensures faster, safer, and more reliable fulfillment across grocery, e-commerce, water, and food categories..",
  },
  {
    title: "EmerJobs: Where Urgency Meets Opportunity. ",
    subtitle: "EmerJobs",
    description:
      "EmerJobs was created to solve a critical problem — the gap between job seekers who need work today and employers who need help right now. It’s an AI-powered platform designed to instantly match India’s youth with verified jobs, from urgent one-day gigs to flexible part-time and full-time roles.",
  },
];
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/auth"; // or use navigate("/auth");
};
export default function AnimationHomePage() {
  const [showMeet, setShowMeet] = useState(false);
  const [showMedia, setShowMedia] = useState(false);
  const isLoggedIn = useAuth();

  return (
    <div className="container-fluid p-0">
      <section
        className="text-white position-relative"
        style={{ minHeight: "100vh" }}
      >
        {/* 🔹 Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: 0 }}
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔹 Navbar INSIDE the hero section OVER the video */}
        <Navbar
          expand="lg"
          className="py-2 position-relative"
          variant="light"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)", // translucent overlay
            backdropFilter: "blur(5px)",
            zIndex: 2,
          }}
        >
          <Container fluid>
            <Navbar.Brand
              href="#home"
              className="d-flex align-items-center py-0 text-white fw-bold"
            >
              <img
                src={logo}
                alt="Logo"
                width="80"
                height="80"
                className="d-inline-block align-top me-2"
                style={{ borderRadius: "50%", border: "1px solid black" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className="text-white px-2 small">
                  Home
                </Nav.Link>

                <Nav
                  onMouseEnter={() => setShowMeet(true)}
                  onMouseLeave={() => setShowMeet(false)}
                >
                  <NavDropdown
                    show={showMeet}
                    title={<span className="text-white">Meet Bharath</span>}
                    id="meet-dropdown"
                    className="custom-dropdown"
                  >
                    <NavDropdown.Item href="/his-story">
                      His Story
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ceo-vision">
                      CEO with a Vision
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/philosophy">
                      His Philosophy
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <Nav.Link
                  href="/businessOpportunities"
                  className="text-white px-2 small"
                >
                  Business Opportunities
                </Nav.Link>
                <Nav.Link
                  href="/services"
                  className="text-white px-2 small"
                >
                  Our Services
                </Nav.Link>
                <Nav
                  onMouseEnter={() => setShowMedia(true)}
                  onMouseLeave={() => setShowMedia(false)}
                >
                  <NavDropdown
                    show={showMedia}
                    title={<span className="text-white">Media</span>}
                    id="media-dropdown"
                    className="custom-dropdown"
                  >
                    <NavDropdown.Item href="/press">Press</NavDropdown.Item>
                    <NavDropdown.Item href="/interviews">
                      Interviews
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <Nav.Link href="/gallery" className="text-white px-2 small">
                  Gallery
                </Nav.Link>
                <Nav.Link href="/contact" className="text-white px-2 small">
                  Contact Us
                </Nav.Link>
                <Nav.Link href="/collaborate" className="text-white px-2 small">
                  Collaborate With Us
                </Nav.Link>

                <Nav.Link
                  href="https://www.linkedin.com/in/bala-bharath-jayasingh-77a4bb22/"
                  target="_blank"
                  className="text-white px-2"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </Nav.Link>
                <Nav.Link
                  href="https://medium.com/@bbspon"
                  target="_blank"
                  className="text-white px-2"
                >
                  <i className="fab fa-medium fa-lg"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {isLoggedIn && (
              <>
                <Nav.Link
                  href="/cmsAdminpanel"
                  style={{ color: "rgba(137, 123, 111, 1)" }}
                >
                  CMS
                </Nav.Link>
                <Nav.Link
                  href="/admindashboard"
                  style={{ color: "rgba(137, 123, 111, 1)" }}
                >
                  Admin
                </Nav.Link>
                <Nav.Link
                  onClick={handleLogout}
                  c
                  style={{ color: "rgba(137, 123, 111, 1)" }}
                >
                  Logout
                </Nav.Link>
              </>
            )}
          </Container>
        </Navbar>

        {/* 🔹 Foreground Hero Text */}
        <div
          className="position-relative h-100 d-flex align-items-start"
          style={{
            zIndex: 1,
            paddingLeft: "5vw",
            paddingRight: "5vw",
            paddingTop: "15vh", // pushes content downward ~15% of screen height
          }}
        >
          <div className="px-5 text-start w-100" style={{ maxWidth: "700px" }}>
            <div className="d-flex flex-wrap justify-content-center">
              {splitHeadline.map((word, i) => (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <h1 className="display-5 fw-bold mx-1 text-white">{word}</h1>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection type="button">
              <div className="text-center mt-2">
                <p className="lead text-center text-white">
                  Innovate. Collaborate. Lead.
                </p>
                <a
                  href="/collaborate"
                  className="btn rounded-pill px-3 py-2 mt-3"
                  style={{
                    backgroundColor: "#C2FBC1",
                    color: "black",
                    padding: "10px 24px",
                    borderRadius: "100px",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    boxShadow:
                      "rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset," +
                      "rgba(44, 187, 99, 0.15) 0 1px 2px," +
                      "rgba(44, 187, 99, 0.15) 0 2px 4px," +
                      "rgba(44, 187, 99, 0.15) 0 4px 8px," +
                      "rgba(44, 187, 99, 0.15) 0 8px 16px," +
                      "rgba(44, 187, 99, 0.15) 0 16px 32px",
                    transition: "all 250ms",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05) rotate(-1deg)")
                  }
                  onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
                >
                  <span className="fw-bold" style={{ fontSize: "14px" }}>
                    Get Started
                  </span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>

      </section>

      {/* Extra Design Section */}
      <section className="py-5 bg-light text-dark">
        <Container>
          {/* 🔹 Section Title */}
          <div className="text-center mb-5">
            <AnimatedSection delay={0}>
              <h2 className="fw-bold" style={{ color: "#008080" }}>
                Innovating with Purpose: The Bala Bharath Effect
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="fs-5" style={{ color: "#008080" }}>A Chronicle of Vision, Valor, and Velocity.</p>
            </AnimatedSection>
          </div>

          {/* 🔹 About Content */}
          <div
            className="row align-items-stretch justify-content-center"
            style={{ minHeight: "520px" }}
          >
            {/* 🔹 Image - Left */}
            <div className="col-md-5 d-flex align-items-stretch mb-4 mb-md-0 text-center">
              <AnimatedSection delay={0.2} className="w-100">
                <div
                  className="w-100 rounded shadow overflow-hidden"
                  style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <img
                    src={image1}
                    alt="Bala Bharath Portrait"
                    className="img-fluid h-100 w-100 object-fit-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* 🔹 Text - Right */}
            <div className="col-md-7 d-flex align-items-stretch">
              <AnimatedSection delay={0.3} className="w-100">
                <div className="d-flex flex-column justify-content-center h-100 px-4">
                  <p className="text-muted mb-3">
                    Bala Bharath, Founder and CEO of{" "}
                    <strong>VEETRU Strategic Management Pvt. Ltd.</strong> and{" "}
                    <strong>BBSOCEAN Online Shopping</strong>, is a startup architect known for defying
                    the traditional one-project startup model. He leads multiple
                    transformative initiatives across industries—all at once.
                  </p>

                  <p className="text-muted mb-3">
                    He doesn’t just adapt to change—he architects it. From full-stack
                    commerce to cloud platforms and cinematic IPs like{" "}
                    <strong>NURU: The Wild Rises</strong>, Bala is building entire
                    ecosystems designed for scalability, automation, and future readiness.
                  </p>

                  <p className="text-muted mb-3">
                    With game-changing platforms like <strong>BBSCART e-commerce</strong>,{" "}
                    <strong>Golldex Integrated Payment and Gold Investment Wallet</strong>, and <strong>EmerJobs</strong>, Bala is
                    redefining how business operations, customer relationships, payments,
                    and media coexist.
                  </p>

                  <p className="text-muted mb-3">
                    He’s independently creating <strong>India’s first 3D hyper-realistic cinematic universe — NURU — a theatrical release,</strong> where lifelike animation and storytelling merge into one breathtaking world. Developed entirely by him, with the support of powerful AI tools, this isn’t just a movie. It’s a new kind of filmmaking — crafted without studios, but with vision, emotion, and tech working hand in hand. Every frame, every scene, is being built from scratch to redefine how cinema is made in India.
                  </p>

                  <p className="text-muted mb-3">
                    Through his commission-based ecosystem, Bala empowers entrepreneurs,
                    vendors, and agents across India—creating real financial growth,
                    lifestyle transformation, and business scalability.
                  </p>

                  <blockquote className="blockquote mt-4">
                    <p
                      className="text-primary fs-5 fst-italic"
                      style={{ fontFamily: "Georgia" }}
                    >
                      “Opportunity is just the start—true success is the lifestyle you build.”
                    </p>
                    <footer className="blockquote-footer">Bala Bharath</footer>
                  </blockquote>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>


      <section className="py-0 bg-light w-100">
        <Carousel fade controls indicators interval={3000}>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImage2} alt="First slide" />
            <Carousel.Caption
              className="text-start"
              style={{
                left: "0", // override Bootstrap's default
                right: "auto", // prevent stretching
                paddingLeft: "3rem", // adjust this as needed
                bottom: "20%", // optional vertical position
              }}
            >
              <h3 className="display-4 fw-bold" style={{ color: "#0B1F3A" }}>
                Smart Business Solutions
              </h3>
              <p className="lead" style={{ color: "#0B1F3A" }}>
                Transforming operations with innovative tech.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImage1} alt="Second slide" />
            <Carousel.Caption
              className="text-end"
              style={{
                right: "0", // aligns to the right
                left: "auto", // remove default left alignment
                paddingRight: "3rem", // optional padding from the edge
                bottom: "20%", // adjust vertical position if needed
              }}
            >
              <h3 className="display-4 fw-bold" style={{ color: "#0B1F3A" }}>
                Empowering Vision
              </h3>
              <p className="lead" style={{ color: "#0B1F3A" }}>
                Build a better future through collaboration.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* My Story Section */}

      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#008080" }}>
              How I Deliver Value
            </h2>
          </div>
          <div className="row g-4">
            {[
              {
                img: BBSCART,
                title: "Smart shopping simplified",
                desc: "Delivering groceries with speed, clarity, and purpose.",
              },
              {
                img: ThiaWorld,
                title: "Jewels that speak style",
                desc: "Crafting trend-forward elegance for every moment.",
              },
              {
                img: Golldex,
                title: "Power your apps",
                desc: "Build secure , scalable fintech experiences with ease.",
              },
              {
                img: EmerJobs,
                title: "Workforce that works",
                desc: "Accelerate hiring, performance, and business growth",
              },
              {
                img: Nuru,
                title: "The Last Chase – A 3D Cinematic Wild Tale",
                desc: "Cinematic animal adventure with emotion and thrill.",
              },

              {
                img: CRM,
                title: "Lead with data-Win with insights",
                desc: "Customer-first platform for seamless relationship management.",
              },
              {
                img: PE,
                title: "Run smart. Scale faster",
                desc: "All-in-one operations suite for modern retail and enterprise.",
              },
              {
                img: EDelivery,
                title: "Deliver-Track-Repeat",
                desc: "Next-gen e-delivery solutions made for scale and reliability.",
              },
              {
                img: Agent,
                title: "Future in Action",
                desc: "Automate intelligence with adaptable, no-code AI bots.",
              },
            ].map((item, index) => (
              <div
                className={`col-md-6 col-lg-3 ${index === 8 ? "mx-auto d-flex justify-content-center" : ""
                  }`}
                key={index}
              >
                <AnimatedSection delay={index * 0.2}>
                  <div className="feature-card glass-card text-center p-4">
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          width: "140px",
                          height: "140px",
                        }}
                      />
                    ) : (
                      item.icon
                    )}
                    <h5 className="fw-bold mt-3" style={{ color: "#0B1F3A" }}>
                      {item.title}
                    </h5>
                    <p className="text-muted" style={{ color: "#444444" }}>
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6 position-relative mb-4 mb-md-0">
              <AnimatedSection delay={0.1} type="image">
                <img
                  src={image2}
                  alt="Desk"
                  className="img-fluid rounded-3 w-100"
                />
                <img
                  src={image2}
                  alt="Profile"
                  className="position-absolute rounded-circle border border-white shadow"
                  style={{
                    width: "100px",
                    height: "100px",
                    left: "-50px",
                    top: "30%",
                    transform: "translateY(-50%)",
                  }}
                />
              </AnimatedSection>
            </div>
            <div className="col-md-6">
              <AnimatedSection delay={0.2}>
                <h3 className="fw-bold" style={{ color: "#008080" }}>
                  My story
                </h3>
                <p style={{ color: "#444444" }}>
                  <strong>Bala Bharath’s</strong> journey is a powerful testament to perseverance
                  and relentless growth. Raised in a modest background, his rise
                  is defined not by privilege but by unwavering determination
                  and hard work.
                </p>
                <a
                  href="/his-story"
                  className="btn btn-outline-dark rounded-pill px-4 py-2"
                >
                  Read my story
                </a>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Section 2 */}
      <div className="row align-items-center my-5 flex-md-row-reverse">
        <div className="col-md-6">
          <AnimatedSection type="image" delay={0.2}>
            <img src={image3} className="img-fluid rounded" alt="Feature 2" />
          </AnimatedSection>
        </div>
        <div className="col-md-6 text-start">
          <AnimatedSection delay={0.4}>
            <h2 style={{ color: "#008080" }}>Dynamic Motion</h2>
            <p style={{ color: "#444444" }}>
              Where Leadership Meets Movement.<br/>
              <strong> Bala Bharath’s </strong>
              journey unfolds through every dynamic frame — inspiring action,
              leadership, and bold innovation.
            </p>
          </AnimatedSection>
        </div>
      </div>
      {/* Auto-playing YouTube Video Section */}
      {/* Compact Auto-playing YouTube Video Section */}
      <section className="py-3 bg-dark">
        <Container className="text-center">
          <AnimatedSection delay={0.2}>
            <h2 className="fw-bold mb-3 text-white">
              Watch Our Vision in Motion
            </h2>
            <div
              style={{
                position: "relative",
                paddingBottom: "45%",
                height: 0,
                overflow: "hidden",
                maxWidth: "100%",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/USnLtZA8crs"
                title="Intro Video"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#008080" }}>
              🚀 Discover Our Digital Ecosystem
            </h2>
          </div>
        <div className="row g-4">
  {appFeatures.map((feature, index) => (
    <div className="col-md-6 col-lg-4 d-flex" key={index}>
      <AnimatedSection delay={index * 0.2} className="w-100">
        <div
          className="card shadow rounded-4 p-4 w-100 d-flex flex-column"
          style={{
            minHeight: "100%", // Fills parent height
            height: "100%", // Ensures full height
            position: "relative",
          }}
        >
          {/* Top-right circular icon */}
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#0E918C",
              color: "#fff",
              fontWeight: "700",
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "translate(50%, -50%)",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
              zIndex: 2,
            }}
          >
            {feature.title.charAt(0)}
          </div>

          <div style={{ position: "relative", zIndex: 1 }} className="flex-grow-1">
            <h5 className="text-app-title fw-bold" style={{ color: "#0E918C" }}>
              {feature.title}
            </h5>
            <h6 className="text-app-subtitle" style={{ color: "#008080" }}>
              {feature.subtitle}
            </h6>
            <p className="text-app-body small" style={{ color: "#444444" }}>
              {feature.description}
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  ))}
</div>

        </Container>
      </section>
      {/* My Design System */}
      <section className="py-5">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <AnimatedSection type="image">
                <img
                  src={storyDesk}
                  className="img-fluid rounded shadow"
                  alt="Design System"
                />
              </AnimatedSection>
            </div>
            <div className="col-md-6">
              <AnimatedSection delay={0.2}>
                <h2 className="fw-bold" style={{ color: "#008080" }}>
                  AI Agent System
                </h2>
                <p style={{ color: "#444444" }}>
                  I've engineered a smart and scalable AI agent framework —
                  built for performance, simplicity, and real-world business
                  needs. This system empowers automation through intuitive
                  design, seamless workflows, and real-time decision-making.
                </p>
                <a
                  href="#"
                  className="btn btn-outline-dark rounded-pill px-4 py-2"
                >
                  Explore the AI Agent System
                </a>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Here & There */}
      <section className="py-5 bg-light">
        <Container>
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <AnimatedSection type="image">
                <img
                  src={storyPhoto}
                  className="img-fluid rounded shadow"
                  alt="Featured Work"
                />
              </AnimatedSection>
            </div>
            <div className="col-md-6">
              <AnimatedSection delay={0.2}>
                <h2 className="fw-bold" style={{ color: "#008080" }}>
                  My Vision Through BBSCART
                </h2>
                <p className="text-muted mb-4" style={{ color: "#444444" }}>
                  In a world moving fast toward convenience and automation, I
                  believed one thing:
                  <strong>
                    India deserves more than just digital access — it deserves
                    digital empowerment.
                  </strong>
                  That’s why I built <strong>BBSCART</strong> — a smart commerce
                  platform designed not just to deliver products, but to deliver
                  <strong> value, trust, and transformation.</strong>
                </p>
                <p className="text-muted mb-4" style={{ color: "#444444" }}>
                  As the <strong> CEO and Founder </strong>, I’ve seen firsthand
                  how fragmented supply chains and rising costs hurt the common
                  man, small vendors, and even large enterprises. So, I
                  committed to creating an ecosystem that connects needs to
                  solutions —
                  <strong>
                    from households to hotels, from kitchen essentials to
                    industrial packaging, and from vegetables to daily groceries
                    — all in one app.
                  </strong>
                </p>
                <a
                  href="/businessOpportunities"
                  className="btn btn-outline-dark rounded-pill px-4 py-2"
                >
                  View Featured Work
                </a>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>
      <div className="container my-5">
        <div className="row align-items-stretch">
          {/* 🔹 Image Left */}
          <div className="col-lg-5 d-flex align-items-stretch mb-4 mb-lg-0">
            <AnimatedSection type="image" delay={0.2} className="w-100">
              <div
                className="shadow rounded-4 overflow-hidden w-100"
                style={{ minHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <img
                  src={image5}
                  alt="Interactive Design"
                  className="img-fluid w-100 h-100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </div>
            </AnimatedSection>
          </div>

          {/* 🔹 Text Right */}
          <div className="col-lg-7 d-flex align-items-stretch">
            <AnimatedSection delay={0.4} className="w-100">
              <div className="p-4 p-md-5 bg-white shadow rounded-4 d-flex flex-column justify-content-center w-100">
                <h2 className="fw-bold mb-3" style={{ color: "#008080" }}>
                  Transforming Ideas into Interactive Realities
                </h2>
                <p className="text-muted mb-4">
                  At <strong>BBS (Bala Bharath)</strong>, design goes beyond visuals — it becomes a journey that guides users, evokes emotion, and builds trust. We blend creative storytelling, modern UI principles, and emerging tech to craft experiences that are not just functional, but unforgettable.
                 
                </p>
                <blockquote className="blockquote text-center my-5">
                  <strong className="text-muted mb-0 fw-bold">
                    “When your design reflects your values, users don’t just see — they feel.”
                  </strong>
                </blockquote>
                <p className="text-muted mb-4">
                 Whether you're launching a startup, building a product, or sharing a story — we design with purpose, precision, and a human touch.
                </p>
                <a
                  href="#designSystem"
                  className="btn btn-outline-dark rounded-pill px-4 py-2"
                >
                  Explore More
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>


      {/* Footer Section */}
      <footer className="bg-light py-4 mt-5 border-top">
        <Container className="text-center">
          <p className="mb-1">
            &copy; {new Date().getFullYear()} Veet Technologies
          </p>
          <small className="text-muted">Built with passion and precision</small>
        </Container>
      </footer>
    </div>
  );
}
