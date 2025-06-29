// import React, { useState, useEffect } from "react";
// import {
//   Carousel,
//   Navbar,
//   Nav,
//   NavDropdown,
//   Container,
//   Card,
//   Button,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import image1 from "../assets/carousel1.JPG"; // adjust path as needed
// import image2 from "../assets/CourselImage4.JPG"; // adjust path as needed
// import image3 from "../assets/Carousal.JPG"; // adjust path as needed
// import logo from "../assets/BBSLogo.PNG"; // Update path based on your file structure
// import Thia from "../assets/Thia.JPG";
// import BBSCART from "../assets/BBSCART.JPG";
// import CRM from "../assets/CRM.JPG";
// import AI from "../assets/AIAgent.JPG";
// import EDelivery from "../assets/Delivery.JPG";
// import Golldex from "../assets/Goldex.JPG";
// import POS from "../assets/POS.JPG";
// import Emerjobs from "../assets/Emerjobs.JPG";
// import NURU from "../assets/nuru.JPG";
// import "./HomePage.css";

// import { useNavigate } from "react-router-dom";

// import "./CarouselAnimation.css";
// import useAuth from "../hooks/useAuth";

// const projects = [
//   {
//     title: "BBSCart",
//     image: BBSCART,
//     Description:
//       "BBSCart’s CRM empowers vendors to track customer interactions, personalize engagement, and automate follow-ups—unlocking loyalty and growth like a modern D2C brand.",
//     badgeLabel: "AI for Logistics",
//     badgeColor: "#007BFF",
//   },
//   {
//     title: "Thiaworld Jewellery",
//     image: Thia,
//     Description:
//       "India's smartest jewelry platform powered by Golldex. Offers 40:60 Gold Monthly Plans.",
//     badgeLabel: "Secure Gold Plan",
//     badgeColor: "#E0A800",
//   },
//   {
//     title: "Golldex Wallet",
//     image: Golldex,
//     Description:
//       "An integrated payment and secure digital gold wallet offering instant buy/sell, jewelry-backed savings, and flexible investment options.",
//     badgeLabel: "Integrated Payment Wallet",
//     badgeColor: "#28A745",
//   },
//   {
//     title: "NURU Movie",
//     image: NURU,
//     Description:
//       "India’s first AI-generated cinematic universe—an epic 3D and live-action fusion.",
//     badgeLabel: "AI-Generated Film",
//     badgeColor: "#6F42C1",
//   },
//   {
//     title: "AI Agents",
//     image: AI,
//     Description:
//       "Autonomous AI agents for handling sales, support, research, and operations.",
//     badgeLabel: "Virtual AI Assistant",
//     badgeColor: "#6610f2",
//   },
//   {
//     title: "CRM System",
//     image: CRM,
//     Description:
//       "Track customer interactions, personalize engagement, and automate follow-ups.",
//     badgeLabel: "Automated CRM",
//     badgeColor: "#20c997",
//   },
//   {
//     title: "POS + ERP",
//     image: POS,
//     Description:
//       "Connect in-store and online transactions in real-time, manage inventory and payments.",
//     badgeLabel: "Real-Time Sync",
//     badgeColor: "#fd7e14",
//   },
//   {
//     title: "Delivery App",
//     image: EDelivery,
//     Description:
//       "AI-enhanced last-mile delivery with route optimization and fleet tracking.",
//     badgeLabel: "Last-Mile Solution",
//     badgeColor: "#17a2b8",
//   },
//   {
//     title: "EmerJobs",
//     image: Emerjobs,
//     Description:
//       "An AI-powered employment platform connecting India’s youth with verified job opportunities—ranging from urgent, day-based gigs to flexible part-time and permanent full-time roles.",
//     badgeLabel: "Last-Mile Solution",
//     badgeColor: "#17a2b8",
//   },
// ];

// const isLoggedIn = !!localStorage.getItem("token");

// const handleLogout = () => {
//   localStorage.removeItem("token");
//   window.location.href = "/auth"; // or use navigate("/auth");
// };
// const HomePage = () => {
//   const isLoggedIn = useAuth();
//   const navigate = useNavigate();
//   // 👇 add with other states
//   const [expanded, setExpanded] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const [showMeet, setShowMeet] = useState(false);
//   const [showAchievements, setShowAchievements] = useState(false);
//   const [showMedia, setShowMedia] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (expanded) setExpanded(false);

//       if (window.scrollY > lastScrollY) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }

//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [expanded, lastScrollY]);
//   return (
//     <div className="bg-dark text-light vw-100">
//       {/* NAVBAR */}
//       {/* NAVBAR */}
//       <Navbar
//         expanded={expanded}
//         onToggle={(next) => setExpanded(next)}
//         expand="lg"
//         variant="dark"
//         bg="transparent"
//         fixed="top"
//         className="py-0"
//         style={{
//           zIndex: 1000,
//           transition: "top 0.3s",
//           top: showNavbar ? "0" : "-100px",
//         }}
//       >
//         <Container fluid>
//           <Navbar.Brand
//             href="#home"
//             className="d-flex align-items-center gap-3 me-auto"
//             style={{ height: "80px" }} // ensures navbar height doesn't stretch
//           >
//             <img
//               src={logo}
//               alt="Bala Bharath Logo"
//               style={{ height: "150px", width: "auto", objectFit: "contain" }}
//             />

//             <span
//               className="text-cyan fw-bold display-6"
//               style={{
//                 color: "cyan",
//                 textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
//                 fontFamily: "Georgia",
//               }}
//             ></span>
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto" onClick={() => setExpanded(false)}>
//               {/* every click on a link now also closes the menu */}
//               <Nav.Link
//                 href="#home"
//                 className="navbar-link"
//                 style={{
//                   color: "#000000",
//                   textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 Home
//               </Nav.Link>

//               {/* Meet Bharath */}
//               <Nav
//                 onMouseEnter={() => setShowMeet(true)}
//                 onMouseLeave={() => setShowMeet(false)}
//               >
//                 <NavDropdown
//                   show={showMeet}
//                   title={
//                     <span
//                       className="navbar-link"
//                       style={{
//                         color: "#000000",
//                         textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                       }}
//                     >
//                       Meet Bharath
//                     </span>
//                   }
//                   id="meet-dropdown"
//                   className="custom-dropdown"
//                 >
//                   <NavDropdown.Item
//                     href="/his-story"
//                     className="navbar-link"
//                     style={{
//                       color: "#000000",
//                       textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     His Story
//                   </NavDropdown.Item>
//                   <NavDropdown.Item
//                     href="/ceo-vision"
//                     className="navbar-link"
//                     style={{
//                       color: "#000000",
//                       textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     CEO with a Vision
//                   </NavDropdown.Item>
//                   <NavDropdown.Item
//                     href="/philosophy"
//                     className="navbar-link"
//                     style={{
//                       color: "#000000",
//                       textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     His Philosophy
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>

//               {/* Achievements
//               <Nav
//                 onMouseEnter={() => setShowAchievements(true)}
//                 onMouseLeave={() => setShowAchievements(false)}
//               >
//                 <NavDropdown
//                   show={showAchievements}
//                   title={
//                     <span
//                       className="navbar-link"
//                       style={{
//                         color: "#000000",
//                         textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                       }}
//                     >
//                       Achievements
//                     </span>
//                   }
//                   id="achievements-dropdown"
//                   className="custom-dropdown"
//                 >
//                   <NavDropdown.Item
//                     href="/bbs-achievements"
//                     className="navbar-link"
//                     style={{
//                       color: "#000000",
//                       textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     Awards & Recognitions
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </Nav> */}

//               <Nav.Link
//                 href="/businessOpportunities"
//                 className="navbar-link"
//                 style={{
//                   color: "#000000",
//                   textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 Business Opportunities
//               </Nav.Link>

//               {/* Media */}
//               <Nav
//                 onMouseEnter={() => setShowMedia(true)}
//                 onMouseLeave={() => setShowMedia(false)}
//               >
//                 <NavDropdown
//                   show={showMedia}
//                   title={
//                     <span
//                       className="navbar-link"
//                       style={{
//                         color: "#000000",
//                         textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                       }}
//                     >
//                       Media
//                     </span>
//                   }
//                   id="media-dropdown"
//                   className="custom-dropdown"
//                 >
//                   <NavDropdown.Item
//                     href="/press"
//                     className="navbar-link"
//                     style={{
//                       color: "#000000",
//                       textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     Press
//                   </NavDropdown.Item>
//                   <NavDropdown.Item
//                     href="/interviews"
//                     className="navbar-link"
//                     style={{
//                       color: "#000000",
//                       textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     Interviews
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>

//               <Nav.Link
//                 href="/gallery"
//                 className="navbar-link"
//                 style={{
//                   color: "#000000",
//                   textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 Gallery
//               </Nav.Link>
//               <Nav.Link
//                 href="/contact"
//                 className="navbar-link"
//                 style={{
//                   color: "#000000",
//                   textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 Contact us
//               </Nav.Link>
//               <Nav.Link
//                 href="/collaborate"
//                 className="navbar-link"
//                 style={{
//                   color: "#000000",
//                   textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 Collaborate With Us
//               </Nav.Link>
//               {isLoggedIn && (
//                 <>
//                   <Nav.Link
//                     href="/cmsAdminpanel"
//                     className="navbar-link"
//                     style={{
//                       color: "#000000",
//                       textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     CMS
//                   </Nav.Link>
//                   <Nav.Link
//                     onClick={handleLogout}
//                     className="navbar-link"
//                     style={{
//                       color: "#000000",
//                       textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     Logout
//                   </Nav.Link>
//                 </>
//               )}
//             </Nav>

//             <Nav className="ms-3 d-flex align-items-center">
//               <Nav.Link
//                 href="https://www.linkedin.com/"
//                 target="_blank"
//                 className="navbar-link"
//                 style={{
//                   color: "#000000",
//                   textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 <i className="fab fa-linkedin fa-lg"></i>
//               </Nav.Link>
//               <Nav.Link
//                 href="https://medium.com/"
//                 target="_blank"
//                 className="navbar-link"
//                 style={{
//                   color: "#000000",
//                   textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 <i className="fab fa-medium fa-lg"></i>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* HERO IMAGE CAROUSEL SECTION */}
//       <section id="home">
//         <Carousel fade controls={true} indicators={false}>
//           <Carousel.Item>
//             <img
//               className="d-block w-100 zoom-img"
//               src={image1}
//               alt="First slide"
//               style={{
//                 aspectRatio: "16 / 9",
//                 objectFit: "cover",
//                 width: "70%",
//                 margin: "0 auto",
//               }}
//             />

//             <Carousel.Caption className="carousel-caption-custom text-start custom-caption-top-left">
//               <div className="d-inline-block">
//                 <h3
//                   className="display-3 fw-bold text-dark mb-2"
//                   style={{ fontFamily: "Georgia" }}
//                 >
//                   Welcome to <br /> Bala Bharath’s
//                   <br />
//                   Universe
//                 </h3>
//                 <p
//                   className="lead fst-italic small-caps "
//                   style={{ color: "#000000" }}
//                 >
//                   <strong>
//                     Startup Architect | AI Specialist| Business Ecosystem
//                     <br />
//                     Builder I Next-Gen Tech Strategist
//                   </strong>
//                 </p>
//               </div>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100 zoom-img"
//               src={image2}
//               alt="First slide"
//               style={{
//                 aspectRatio: "16 / 9",
//                 objectFit: "cover",
//                 width: "70%",
//                 margin: "0 auto",
//               }}
//             />
//             <Carousel.Caption className="carousel-caption-custom text-end custom-caption-top-right">
//               <div className="p-4">
//                 <h1
//                   className="display-5 text-dark fw-bold"
//                   style={{ fontFamily: "Georgia" }}
//                 >
//                   Business Collaboration <br />& Co-Founder Support
//                 </h1>
//                 <p className="lead fst-italic" style={{ color: "#000000" }}>
//                   <strong> Veetru Strategic Management Pvt. Ltd.</strong>
//                 </p>
//               </div>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100 zoom-img"
//               src={image3}
//               alt="First slide"
//               style={{
//                 aspectRatio: "16 / 9",
//                 objectFit: "cover",
//                 width: "70%",
//                 margin: "0 auto",
//               }}
//             />
//             <Carousel.Caption className="carousel-caption-custom text-end custom-caption-top-right">
//               {/* <div className="d-inline-block"> */}
//               <h1
//                 className="fw-bold"
//                 style={{
//                   color: "#1a1a1a", // Deep neutral instead of plain "text-dark"
//                   fontFamily: "Georgia, serif",
//                   letterSpacing: "0.5px",
//                 }}
//               >
//                 AI, Business & Vision
//               </h1>

//               <p className="lead fst-italic" style={{ color: "#000000" }} >
//                 <strong>
//                   A Founder Who Executes Ideas Swiftly and Strategically.
//                 </strong>
//               </p>

//               {/* </div> */}
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </section>

//       {/* HERO SECTION */}
//       <section
//         className="d-flex flex-column justify-content-center align-items-center vh-100 text-center "
//         id="home"
//         // style={{backgroundColor:'#6D213C'}}
//       >
//         <h1
//           className="display-2 fw-bold mb-3"
//           style={{ textShadow: "0 2px 4px rgba(255,255,255,0.2)" }}
//         >
//           Bala Bharath J
//         </h1>
//         <h5 className="text-warning fw-semibold mb-2">
//           Visionary Technopreneur | Ecosystem Architect | Global Business
//           Collaborator
//         </h5>
//         <p className="lead fst-italic mb-3 text-light">
//           “Founder & CEO – Veetru Strategic Management Pvt. Ltd.”
//         </p>
//         <h5 className="text-muted mb-4">
//           Startup Architect • AI & Automation Strategist • Business Ecosystem
//           Designer
//         </h5>
//         <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
//           <a
//             href="#projects"
//             className="btn btn-outline-light btn-lg px-4 py-2 shadow-sm"
//             style={{ borderRadius: "50px", transition: "0.3s" }}
//           >
//             🚀 View Projects
//           </a>
//           <a
//             href="#contact"
//             className="btn btn-warning btn-lg px-4 py-2 text-dark fw-bold shadow-sm"
//             style={{ borderRadius: "50px", transition: "0.3s" }}
//           >
//             📞 Contact Me
//           </a>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section
//         className="container-fluid py-5"
//         id="about"
//         style={{ backgroundColor: "#f8f9fa" }}
//       >
//         <div className="row align-items-center justify-content-center">
//           <div className="col-lg-5 mb-4 mb-lg-0">
//             <img
//               src={image2}
//               alt="Bala Bharath Portrait"
//               className="img-fluid rounded shadow"
//               style={{ maxHeight: "550px", objectFit: "cover" }}
//             />
//           </div>
//           <div className="col-lg-6 px-4">
//             <h2
//               className="fw-bold mb-3 text-dark"
//               style={{ fontFamily: "Georgia" }}
//             >
//               Innovating with Purpose: The Bala Bharath Effect
//             </h2>
//             <p className="lead text-secondary">
//               <strong></strong>
//               <br />A Chronicle of Vision, Valor, and Velocity.
//             </p>
//             <p className="text-muted">
//               Bala Bharath, Founder and CEO of{" "}
//               <strong>VEETRU Strategic Management Pvt. Ltd.</strong> and{" "}
//               <strong>BBSOCEAN</strong>, is a startup architect known for
//               defying the traditional one-project startup model. He leads
//               multiple transformative initiatives across industries—all at once.
//             </p>
//             <p className="text-muted">
//               He doesn’t just adapt to change—he architects it. From full-stack
//               commerce to cloud platforms and cinematic IPs like{" "}
//               <strong>NURU: The Wild Rises</strong>, Bala is building entire
//               ecosystems designed for scalability, automation, and future
//               readiness.
//             </p>
//             <p className="text-muted">
//               With game-changing platforms like <strong>BBSCART</strong>,{" "}
//               <strong>Golldex</strong>, and <strong>EmerJobs</strong>, Bala is
//               redefining how business operations, customer relationships,
//               payments, and media coexist.
//             </p>
//             <p className="text-muted">
//               He is also the visionary behind India’s first independently
//               produced hyper-realistic live-action/animation cinematic universe—
//               <strong>NURU</strong>—fusing technology and storytelling at an
//               unmatched level.
//             </p>
//             <p className="text-muted">
//               Through his commission-based ecosystem, Bala empowers
//               entrepreneurs, vendors, and agents across India—creating real
//               financial growth, lifestyle transformation, and business
//               scalability.
//             </p>
//             <blockquote className="blockquote mt-4">
//               <p
//                 className="text-primary fs-5 fst-italic"
//                 style={{ fontFamily: "Georgia" }}
//               >
//                 “Opportunity is just the start—true success is the lifestyle you
//                 build.”
//               </p>
//               <footer className="blockquote-footer">Bala Bharath</footer>
//             </blockquote>
//           </div>
//         </div>
//       </section>

//       {/* VIDEO CAROUSEL SECTION */}
//       <section className="bg-secondary py-5 text-center" id="media">
//         <h2 className="mb-4" style={{ fontFamily: "Georgia" }}>
//           Vision & Journey
//         </h2>
//         <Carousel controls={true} indicators={false} interval={5000} fade>
//           <Carousel.Item>
//             <video className="d-block w-100" controls>
//               <source src="/assets/IntroVideo.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </Carousel.Item>
//           <Carousel.Item>
//             <video className="d-block w-100" controls>
//               <source src="/assets/IntroVideo.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </Carousel.Item>
//           <Carousel.Item>
//             <video className="d-block w-100" controls>
//               <source src="/assets/IntroVideo.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </Carousel.Item>
//         </Carousel>
//       </section>

//       {/* PROJECT CARDS SECTION */}
//       <section className="container-fluid py-5 bg-light" id="gallery">
//         <div className="container">
//           <h2
//             className="text-center fw-bold display-5 mb-5 text-dark"
//             style={{ fontFamily: "Georgia" }}
//           >
//             🚀 Explore the App Universe
//           </h2>
//           <div className="row g-4 ">
//             {projects.map((project, index) => (
//               <div className="col-sm-12 col-md-6 col-lg-4 " key={index}>
//                 <div
//                   className="card border-0 shadow-sm h-100   project-card"
//                   style={{
//                     borderRadius: "1rem",
//                     transition: "transform 0.3s ease-in-out",
//                   }}
//                 >
//                   <div
//                     className="position-relative  "
//                     style={{ border: "1px solid black", borderRadius: "20px" }}
//                   >
//                     <img
//                       src={project.image}
//                       className="card-img-top"
//                       alt={project.title}
//                       style={{
//                         height: "220px",
//                         objectFit: "cover",
//                         borderTopLeftRadius: "1rem",
//                         borderTopRightRadius: "1rem",
//                         borderRadius: "20px",
//                       }}
//                     />
//                     <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2 px-3 py-2 rounded-pill shadow">
//                       {project.badgeLabel}
//                     </span>
//                   </div>
//                   <div className="card-body d-flex flex-column justify-content-between">
//                     <h5 className="card-title text-primary fw-bold">
//                       {project.title}
//                     </h5>
//                     <p
//                       className="card-text text-muted"
//                       style={{ fontSize: "0.95rem" }}
//                     >
//                       {project.Description}
//                     </p>
//                     <a
//                       href="#!"
//                       className="btn btn-outline-primary mt-auto w-100 rounded-pill"
//                       onClick={() => {
//                         const sectionMap = {
//                           "CRM System": "bbscrm",
//                           "POS + ERP": "poserp",
//                           "Golldex Wallet": "golldex",
//                           "Thiaworld Jewellery": "thiaworld",
//                           "Delivery App": "bbsdelivery",
//                           "AI Agents": "aiagents",
//                           "NURU Movie": "nuru",
//                           "BBS Delivery App": "bbsdelivery",
//                           EmerJobs: "emerJobs",
//                         };
//                         const target = sectionMap[project.title];
//                         if (target) {
//                           navigate(`/project-details?section=${target}`);
//                         } else {
//                           console.error(
//                             `No section mapping for title: ${project.title}`
//                           );
//                         }
//                       }}
//                     >
//                       View Details →
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-black text-center py-4" id="contact">
//         <p>Connect with me:</p>
//         <a href="" className="btn btn-outline-light btn-sm me-2">
//           GitHub
//         </a>
//         <a
//           href="https://youtu.be/YYQ7xOsXBOI"
//           className="btn btn-outline-light btn-sm me-2"
//         >
//           YouTube
//         </a>
//         <a href="" className="btn btn-outline-light btn-sm">
//           Email
//         </a>
//         <p className="mt-3 mb-0 small">
//           © {new Date().getFullYear()} Bala Bharath. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
