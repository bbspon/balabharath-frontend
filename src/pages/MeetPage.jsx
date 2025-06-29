import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedSection from "../AnimatedSection"; // make sure this path is correct
import image2 from "../assets/image2.webp"; // adjust path
import NavbarCommon from "./NavbarCommon"; // adjust path as needed

const MeetPage = () => {
  return (
    <>
      <NavbarCommon />
      <div className="bg-light text-dark">
        {/* HERO SECTION */}
        <div className=" text-dark text-center py-5">
          <AnimatedSection delay={0.1}>
            <h1 className="display-4 fw-bold">Meet Bala Bharath</h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="lead">
              A Visionary Who Builds With Speed, Clarity & AI Precision
            </p>
          </AnimatedSection>
        </div>

        {/* FOUNDER MESSAGE */}
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={6}>
              <AnimatedSection delay={0.3}>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Bala Bharath"
                  style={{
                    width: "80%",
                    height: "400px",
                    objectFit: "cover",
                    margin: "0 auto",
                  }}
                />
              </AnimatedSection>
            </Col>
            <Col md={6}>
              <AnimatedSection delay={0.4}>
                <h2>My Message</h2>
                <p>
                  I’m not a traditional software developer. I’m a prompt-first
                  architect. My work bridges raw ideas with real execution. With
                  AI tools and sharp logic, I’ve built systems faster than most
                  companies — even without writing the code myself.
                </p>
                <p>
                  The world is changing. The real edge is not who codes better,
                  but who executes faster with vision. That’s who I am. And what
                  I stand for.
                </p>
              </AnimatedSection>
            </Col>
          </Row>
        </Container>

        {/* VISION STATEMENT */}
        <Container className="py-5 bg-white text-center">
          <AnimatedSection delay={0.5}>
            <h2 className="mb-4">My Vision</h2>
            <h3 className="lead px-4">
              Sculpting the Future with Precision and Soul
            </h3>
            <p className="lead px-4">
              For Bala Bharath, vision isn’t buzzword fluff—it’s the code that
              drives his system. He doesn't react to trends; he architects the
              environment in which trends are born. His ideas don’t follow
              timelines. They create them.
            </p>
            <h3>
              “To redefine digital commerce—not as a transaction, but as a
              transformational experience.”
            </h3>
            <p>
              Across BBSCART and its powerful ecosystem (BBS Ocean, Golldex,
              Thiaworld, BBS Delivery, BBS Pro), Bala’s roadmap fuses
              frictionless design, future-ready automation, and an unshakable
              commitment to inclusion and trust. His vision is never about one
              app or platform—it’s about reprogramming the entire digital
              economy for good.
            </p>
          </AnimatedSection>
        </Container>

        {/* CORE VALUES */}
        <Container className="py-5">
          <AnimatedSection delay={0.6}>
            <h2 className="text-center mb-4">
              The Invisible Architecture of Enduring Success
            </h2>
            <p className="text-center mb-5">
              Every great product fades without values. Bala Bharath’s rise
              isn’t luck or timing—it’s rooted in non-negotiables:
            </p>
          </AnimatedSection>
          <Row className="g-4">
            {[
              {
                title: "Integrity Without Exception",
                desc: "Trust is the only real currency.",
              },
              {
                title: "Innovation With Conscience",
                desc: "Every line of code has a purpose beyond profit.",
              },
              {
                title: "People Before Process",
                desc: "Systems scale better when people thrive first.",
              },
              {
                title: "Progress With Responsibility",
                desc: "Every breakthrough must carry accountability.",
              },
              {
                title: "Simplicity With Depth",
                desc: "Solutions must be clear, accessible, and deeply thought out",
              },
              {
                title: "Collaboration With Purpose",
                desc: "Every partner, vendor, and team member is part of a larger mission.",
              },
            ].map((val, i) => (
              <Col md={4} key={i}>
                <AnimatedSection delay={0.7 + i * 0.1}>
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <Card.Title>{val.title}</Card.Title>
                      <Card.Text>{val.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </AnimatedSection>
              </Col>
            ))}
          </Row>
        </Container>

        {/* TIMELINE */}
        <Container className="py-5 bg-light">
          <AnimatedSection delay={0.8}>
            <h2 className="text-center mb-4">🔹 Victories</h2>
            <h3>
              Bala Bharath’s success can’t be boxed into KPIs. His impact shows
              in ecosystems that now run smarter, faster, fairer because of the
              tools he built:
            </h3>
            <ul className="timeline list-unstyled px-2 mt-4">
              <h4>Not Just Checkpoints, But Echoes of a Mission</h4>
              <li className="mb-4">
                <strong>BBSCART.com</strong> — Started building my first
                AI-prompt assisted CRM platform.
              </li>
              <li className="mb-4">
                <strong>Golldex</strong> — Launched Golldex, Thiaworld, and POS
                ERP with minimal dev support.
              </li>
              <li className="mb-4">
                <strong>Thia Secure Plan</strong> — Conceptualized NURU — a
                full-scale 3D animated feature for theaters.
              </li>
              <li className="mb-4">
                <strong>BBS Delivery Platform</strong> — Created prompt-powered
                multi-role CRM with real-time analytics and automation.
              </li>
              <li className="mb-4">
                <strong>BBS Pro + CRM Stack</strong> — Building a branding
                engine through storytelling, AI agents, and cinematic tech.
              </li>
              <li className="mb-4">
                <strong>Mentorship Network</strong> — Enabling local leadership
                in Tier-2/Tier-3 cities through franchise, TH, and agent
                opportunities.
              </li>
            </ul>
          </AnimatedSection>
        </Container>

        {/* FOOTER */}
        <footer className="bg-dark text-white text-center py-3">
          <p className="mb-1">© {new Date().getFullYear()} Bala Bharath J</p>
          <small>
            Built with passion. Powered by AI. Delivered with clarity.
          </small>
        </footer>
      </div>
    </>
  );
};

export default MeetPage;
