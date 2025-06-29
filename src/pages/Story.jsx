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
                Bala Bharath’s journey is a powerful testament to perseverance
                and relentless growth. Raised in a modest background, his rise
                is defined not by privilege but by unwavering determination and
                hard work. Before founding Veetru Strategic Management Pvt.
                Ltd., Bala spent 12 years living and working across France and
                other European countries. Starting his career as a technician,
                he mastered every role with dedication and ambition, steadily
                climbing the ladder to become a Production Head.
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
            His international experience gave him deep insights into structured
            growth, global technology architectures, and disciplined business
            operations. Returning to India was a conscious, visionary choice —
            armed with invaluable expertise and a clear mission: to create
            innovative platforms that empower India’s grassroots economy and
            drive transformative progress across industries.
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
            Bala Bharath, Founder and CEO of VEETRU Strategic Management Pvt.
            Ltd. and BBSOCEAN Online Shopping, stands out as a visionary
            entrepreneur pioneering a revolutionary approach in India’s startup
            ecosystem.
          </p>
          <p className="mb-0">
            Breaking the traditional mold where startups focus on one project at
            a time, Bala masterfully leads, manages, and delivers multiple
            complex projects across diverse industries simultaneously. His
            leadership, strategic insight, and technological expertise enable
            him to coordinate cross-functional teams, align resources, and
            execute innovative solutions with precision.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={1.0}>
          <p className="mb-0">
            His ventures — BBSCART, Golldex, Emerjobs, and the BBS Delivery +
            Ecommerce App — redefine the digital business landscape with
            advanced CRM systems, secure payment infrastructure, and
            creator-driven ecosystems.
          </p>
          <p>
            Bala is the creative mind behind “NURU: The Wild Rises” — a
            cinematic universe blending live-action and hyper-realistic
            animation, setting new benchmarks in the entertainment industry.
          </p>
          <p>
            His vision extends to empowering franchise models, territory heads,
            and vendors across India, offering genuine financial growth and
            independence.
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
