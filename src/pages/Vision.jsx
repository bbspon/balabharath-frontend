import React from "react";
import AnimatedSection from "../AnimatedSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import visionImage from "../assets/CourselImage.JPG"; // use your actual image
import NavbarCommon from "./NavbarCommon";

export default function Vision() {
  return (
    <>
      <NavbarCommon />
      <Container className="py-5">
        {/* Hero Row */}
        <Row className="align-items-center mb-5">
          {/* Text */}
          <Col md={6}>
            <AnimatedSection delay={0.1}>
              <h1
                style={{
                  fontWeight: "800",
                  fontSize: "3rem",
                  color: "#008080",
                }}
              >
                CEO with a Vision
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                Bala believes in intelligent systems that empower people. Under
                his leadership, Veetru and BBSOCEAN Online Shopping and its
                associated ventures like BBSCART and Emerjobs have become
                game-changers in their respective domains. He builds accessible
                ecosystems — from CRM and POS tools to automated AI systems —
                with a mission to simplify technology for regional vendors and
                youth entrepreneurs.
              </p>
            </AnimatedSection>
          </Col>

          {/* Hero Image */}
          <Col md={6} className="text-center">
            <AnimatedSection delay={0.3}>
              <img
                src={visionImage}
                alt="Bala Bharath Vision"
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

        {/* DNA Section */}
        <AnimatedSection delay={0.5}>
          <h2 className="fw-bold mb-3" style={{ color: "#008080" }}>
            A Glance into the DNA of Bala Bharath’s Leadership
          </h2>
          <h5 className="text-muted mb-4">
            The Goodness Within Bala Bharath’s Leadership
          </h5>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
            His vision transforms ideas into revolutions. We code to empower —
            to spark hope, generate livelihoods, and drive meaningful growth.
            Bala crafts strategies that don’t just grow businesses — they ignite
            movements. Every decision, every design, every campaign is powered
            by a fearless commitment to impact, equity, and purpose.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
            He believes in building brands that uplift communities, spark global
            conversations, and lead with heart. This is business with
            brilliance. Strategy with conviction. A future-forward force that
            transforms industries while empowering humanity.
          </p>
        </AnimatedSection>

        {/* Quote Highlight */}
        <AnimatedSection delay={0.7}>
          <blockquote className="blockquote text-center my-5">
            <p
              className="mb-0 fw-bold"
              style={{ fontSize: "1.5rem", color: "#008080" }}
            >
              “He architectures his journey from scratch, one bold step at a
              time.”
            </p>
          </blockquote>
        </AnimatedSection>
      </Container>
    </>
  );
}
