import React from "react";
import AnimatedSection from "../AnimatedSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bharathStoryImage from "../assets/CarouselImage2.JPG"; // your actual cropped image
import NavbarCommon from "./NavbarCommon";

export default function HisStoryPage() {
  return (
    <>
      <NavbarCommon />
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          {/* Text Content on Left */}
          <Col md={6}>
            <AnimatedSection delay={0.1}>
              <h1
                style={{
                  fontWeight: "800",
                  fontSize: "3rem",
                  color: "#008080",
                }}
              >
                Bala Bharath J
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h5 className="text-muted mb-4">
                Founder, Innovator, Visionary Entrepreneur
              </h5>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                Bala Bharath J is the founder of Veetru Strategic Management Private Limited, a visionary company pioneering AI-powered platforms across fintech, e-commerce, healthcare access, education infrastructure, and cinematic storytelling. As the AI architect and systems strategist behind multiple large-scale ventures, Bharath has built a unified product ecosystem under the BBSCART umbrella — including Golldex , Thiaworld (jewellery commerce with secure financing), and BBS Global Health Access (a globally adaptable digital care membership system).
              </p>
            </AnimatedSection>
          </Col>

          {/* Image on Right */}
          <Col md={6} className="text-center">
            <AnimatedSection delay={0.4}>
              <img
                src={bharathStoryImage}
                alt="Bala Bharath"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "0px",
                  boxShadow: "none",
                }}
                className="img-fluid"
              />
            </AnimatedSection>
          </Col>
        </Row>

        {/* Additional Story Content */}
        <AnimatedSection delay={0.6}>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
            Bharath is known for his ability to architect intelligent service delivery models that are modular, inclusive, and automation-ready. His strategic contributions span across CRM and ERP logic, referral commission systems, POS and inventory engines, healthcare access plans, AI agents for business operations, and full-stack cloud-integrated service tools. He collaborates closely with technical teams while focusing on platform architecture, system integration, and user-centered design.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <h2 className="fw-bold mt-5 mb-3" style={{ color: "#008080" }}>
            Innovating with Purpose: The Bala Bharath Effect
          </h2>
          <h5 className="text-muted mb-4">
            A Chronicle of Vision, Valor, and Velocity
          </h5>
          <p>
            Bharath is known for his ability to architect intelligent service delivery models that are modular, inclusive, and automation-ready. His strategic contributions span across CRM and ERP logic, referral commission systems, POS and inventory engines, healthcare access plans, AI agents for business operations, and full-stack cloud-integrated service tools. He collaborates closely with technical teams while focusing on platform architecture, system integration, and user-centered design.
          </p>
          <p className="mb-0">
         Today, Bharath leads Veetru’s expansion across India and the UAE — aligning his company’s products with public health infrastructure, startup innovation frameworks, and next-gen automation across small businesses, retail, wellness, and education sectors.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={1.0}>
          <p>
            🔹 Founder – Veetru Strategic Management Pvt Ltd
          </p>
          <p>
           🔹 Ecosystem – BBSCART, Golldex, Thiaworld Jewellery, BBS Global Health Access
          </p>
          <p>
            🔹 Roles – AI Architect, Tech Strategist, Product Systems Designer
          </p>
           <p>
            🔹 Focus – Scalable, inclusive platforms across fintech, health, retail, and AI
          </p>
           <p>
           🔹 Vision – To build planet-scale systems that combine automation, trust, and real human value
          </p>
        </AnimatedSection>

        <AnimatedSection delay={1.2}>
          <blockquote className="blockquote text-center">
            <p className="mb-0 fw-bold" style={{ color: "#008080" }}>
              “Opportunity is just the start — true success is the lifestyle you
              build.”
            </p>
          </blockquote>
        </AnimatedSection>
      </Container>
    </>
  );
}
