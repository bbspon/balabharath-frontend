import React from "react";
import AnimatedSection from "../AnimatedSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import philosophyImage from "../assets/CourselImagePose.JPG"; // update with your actual image
import NavbarCommon from "./NavbarCommon";

export default function Philosophy() {
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
                People Over Profit
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h5 className="text-muted mb-4">
                Leading with Purpose and Heart
              </h5>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                At the core of Bala Bharath’s leadership philosophy lies a
                simple yet powerful belief: people come before profit. For him,
                business success is not measured solely by financial gains but
                by the positive impact it creates on individuals, communities,
                and society at large. This people-first mindset drives every
                decision, every strategy, and every innovation he undertakes.
              </p>
            </AnimatedSection>
          </Col>

          {/* Hero Image */}
          <Col md={6} className="text-center">
            <AnimatedSection delay={0.4}>
              <img
                src={philosophyImage}
                alt="Bala Bharath Philosophy"
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

        {/* Content Section */}
        <AnimatedSection delay={0.5}>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
            Bala believes that sustainable growth emerges when businesses
            prioritize human value, trust, and empowerment. By nurturing
            relationships with customers, employees, partners, and franchisees,
            he builds ecosystems where everyone thrives together. His approach
            fosters a culture of integrity, transparency, and inclusivity,
            ensuring that profit follows naturally as a result of genuine
            service and meaningful impact.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.7}>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
            This philosophy also reflects Bala’s commitment to mentorship and
            community upliftment — whether it’s guiding early-stage
            entrepreneurs, enabling franchise growth in smaller towns, or
            creating job opportunities through his platforms. Bala’s leadership
            is a beacon for those who aspire to balance commercial success with
            social responsibility, proving that profitability and purpose can,
            and must, go hand in hand.
          </p>
        </AnimatedSection>

        {/* Quote Highlight */}
        <AnimatedSection delay={0.9}>
          <blockquote className="blockquote text-center my-5">
            <p
              className="mb-0 fw-bold"
              style={{ fontSize: "1.5rem", color: "#008080" }}
            >
              “He engineers his journey from the ground up, driven by bold ideas
              and a relentless pursuit of progress.”
            </p>
          </blockquote>
        </AnimatedSection>
      </Container>
    </>
  );
}
