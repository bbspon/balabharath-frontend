import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";
import NavbarCommon from "./NavbarCommon";
import AnimatedSection from "../AnimatedSection"; // adjust if needed
import Banner from "../assets/CourselImage3.JPG";
const roles = [
  {
    title: "🏢 Franchisee Partner",
    description:
      "Lead a city. Build a brand. Command a complete multi-platform business.",
    bullets: [
      "Operate our entire stack in your region—BBSCART, Golldex, Thiaworld, BBS Delivery, and EmerJobs.",
      "Gain exclusive rights, territory lock-in, and operational freedom.",
      "Ideal for entrepreneurs ready to own a fully integrated digital commerce business.",
      "Earn ₹20,00,000 per year by operating your own BBSCART franchise, onboarding vendors, agents, and managing delivery & gold plan transactions in your zone.",
      "🔓 You don’t start from scratch. You start with an empire-in-a-box.",
    ],
  },
  {
    title: "🌐 Territory Head (TH)",
    description: "Scale beyond cities. Shape regions. Mobilize networks.",
    bullets: [
      "Supervise multiple cities or a large state region.",
      "Appoint and manage local agents, vendors, and franchisees.",
      "Earn layered revenue through platform activity beneath your umbrella.",
      "Earn ₹15,00,000 per year by managing regional agents, expanding network growth, and earning layered commissions from all platform activities.",
      "🧭 You're not a middleman. You're a growth architect.",
    ],
  },
  {
    title: "🤝 Agent Partner",
    description: "Bridge access. Enable dreams. Create local impact.",
    bullets: [
      "Onboard vendors, promote gold investment plans, refer delivery signups, or freelance workers.",
      "Flexible—fit it into your lifestyle, part-time or full-time.",
      "Get paid on every successful transaction, EMI plan, or product sale you enable.",
      "💼 You're a catalyst. With each sign-up, you plant economic opportunity.",
    ],
  },
  {
    title: "🛒 Vendor (Seller + Service Provider)",
    description: "Join India’s most powerful multi-platform marketplace.",
    bullets: [
      "Sell products on BBSCART (retail, grocery, fashion, electronics).",
      "Offer services via BBS Delivery or EmerJobs (water, food, repair, freelance).",
      "Get full support: CRM, POS, delivery, escrow, gold wallet.",
      "📦 No tech headaches. Just pure business focus.",
    ],
  },
];

export default function BusinessOpportunities() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [expandedCards, setExpandedCards] = useState(
    new Array(roles.length).fill(false)
  );

  const handleShow = (role) => {
    setSelectedRole(role);
    setShowModal(true);
    setStatus("");
  };

  const handleClose = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/business-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          mobile,
          message,
          role: selectedRole,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Submitted successfully!");
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <NavbarCommon />
      <Container className="py-5">
        <AnimatedSection delay={0.1}>
          <h2 className="text-center mb-4" style={{ color: "#008080" }}>
            Business Opportunities
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <section
            className="py-5 px-3 px-md-5"
            style={{ background: "#ffffff" }}
          >
            <Container>
              <Row className="align-items-start">
                <Col
                  md={6}
                  className="order-2 order-md-1"
                  style={{ paddingRight: "30px" }}
                >
                  <h2 className="fw-bold mb-3 " style={{ color: "#008080" }}>
                    My Vision Through <span>BBSCART</span>
                  </h2>

                  <p className="text-muted">
                    In a world moving fast toward convenience and automation, I
                    believed one thing:
                    <span className="fw-semibold text-muted">
                      India deserves more than just digital access — it deserves
                      digital empowerment.
                    </span>
                    That’s why I built
                    <span className="fw-bold text-muted">BBSCART</span> — a
                    smart commerce platform designed not just to deliver
                    products, but to deliver
                    <span className="text-muted fw-semibold">
            
                      value, trust, and transformation
                    </span>
                    .
                  </p>

                  <p>
                    As the
                    <span className="fw-bold text-muted">CEO and Founder</span>,
                    I’ve seen firsthand how fragmented supply chains and rising
                    costs hurt the common man, small vendors, and even large
                    enterprises. So, I committed to creating an ecosystem that
                    connects needs to solutions —
                    <span className="fw-medium text-muted">

                      from households to hotels, from kitchen essentials to
                      industrial packaging, and from vegetables to daily
                      groceries
                    </span>
                    — all in one app.
                  </p>

                  <Button variant="outline-dark" className="mt-2">
                    View Featured Work
                  </Button>
                </Col>

                <Col
                  md={6}
                  className="order-1 order-md-2 mb-4 mb-md-0 d-flex justify-content-center"
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "100%",
                      borderRadius: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={Banner} // Your image path
                      alt="BBSCART Vision"
                      className="img-fluid w-100 shadow"
                      style={{
                        borderRadius: "16px",
                        maxHeight: "600px",
                        objectFit: "cover",
                      }}
                    />

                    {/* Overlaid Text */}
                    <div
                      style={{
                        position: "absolute",
                        top: "20%",
                        right: "5%",
                        padding: "20px",
                        borderRadius: "12px",
                        maxWidth: "70%",
                        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                      }}
                    >
                      <h5
                        className="fw-bold"
                        style={{ color: "rgba(255, 255, 255, 0.85)" }}
                      >
                        Empowering Every Indian
                      </h5>
                      {/* <p className="mb-0 small text-dark">
                        From city vendors to rural dreamers — BBSCART is a
                        movement to bring trust, reach, and dignity into every
                        doorstep.
                      </p> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </AnimatedSection>

        <Row>
          {roles.map((role, index) => (
            <Col key={index} md={6} className="mb-4">
              <AnimatedSection delay={0.2 + index * 0.1}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title style={{ color: "#0B1F3A" }}>
                      {role.title}
                    </Card.Title>
                    <Card.Text>{role.description}</Card.Text>

                    {expandedCards[index] && (
                      <ul className="text-muted small">
                        {role.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    )}

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => {
                          const updated = [...expandedCards];
                          updated[index] = !expandedCards[index];
                          setExpandedCards(updated);
                        }}
                      >
                        {expandedCards[index] ? "Show Less" : "Read More"}
                      </Button>

                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleShow(role.title)}
                      >
                        I’m Interested
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </AnimatedSection>
            </Col>
          ))}
        </Row>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Express Interest: {selectedRole}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {status === "success" && (
              <Alert variant="success">Submitted successfully!</Alert>
            )}
            {status === "error" && (
              <Alert variant="danger">Something went wrong. Try again.</Alert>
            )}
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Short Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}
