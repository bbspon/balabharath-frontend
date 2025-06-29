// ContactPage.jsx

import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Spinner, Alert } from "react-bootstrap";
import NavbarCommon from "./NavbarCommon";

const ContactPage = () => {
  const fileInputRef = useRef(null);
  const alertRef = useRef(null);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "", file: null });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
   

  };
  useEffect(() => {
    if (submitted && alertRef.current) {
      alertRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Normally, send formData to backend via fetch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        file: null,
      });

      // Clear the file input manually
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    }, 2000); // simulate delay
    
  };

  return (
       <>
      <NavbarCommon />
    <Container fluid className="bg-light py-5">

      {/* Hero */}
      <div className="text-center mb-5">
        <h1>Let’s Talk</h1>
        <p>Pitch your ideas, request a collab, or just say hi.</p>
      </div>

      {/* Success Message */}
      {submitted && (
        <Alert
          ref={alertRef}
          variant="success"
          className="text-center w-75 mx-auto"
        >
          🎉 Thanks {formData.name}, your message has been received! We'll reach
          out shortly.
        </Alert>
      )}

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow">
            <h4>Contact Form</h4>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select an Option</option>
                  <option>Business Collaboration</option>
                  <option>AI Project Request</option>
                  <option>Film Direction/Script</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Upload Document (PDF/DOC/PPT)</Form.Label>
                <Form.Control
                  type="file"
                  accept=".pdf,.doc,.ppt"
                  name="file"
                  ref={fileInputRef}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" variant="primary" disabled={loading}>
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* CTA Cards */}
      <Row className="text-center mt-5 px-3">
        {["Business Collab", "AI Prompt Service", "Movie Script Direction"].map(
          (topic, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="p-3 shadow-sm h-100">
                <Card.Title>{topic}</Card.Title>
                <Card.Text>
                  Click the button to auto-fill subject field
                </Card.Text>
                <Button
                  variant="outline-secondary"
                  onClick={() => setFormData((f) => ({ ...f, subject: topic }))}
                >
                  Select {topic}
                </Button>
              </Card>
            </Col>
          )
        )}
      </Row>

      {/* Book Appointment */}
      <div className="text-center my-4">
        <Button variant="success" href="/book-appointment">
          📅 Book an Appointment
        </Button>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-5 px-3 shadow">
        <h4 className="text-center mb-4">What Partners Say</h4>
        <marquee behavior="scroll" direction="left">
          <span className="mx-5">
            ⭐ “Your prompts fixed my app’s checkout bug in 10 mins!”
          </span>
          <span className="mx-5">
            ⭐ “NURU blew my mind! It’s real cinema!”
          </span>
          <span className="mx-5">⭐ “This guy outpaces full teams.”</span>
        </marquee>
      </div>

      {/* Social Proof Logos */}
      <Row className="text-center mt-5 mb-4">
        <Col>
          <img src="/images/logo1.png" alt="logo1" height="40" />
        </Col>
        <Col>
          <img src="/images/logo2.png" alt="logo2" height="40" />
        </Col>
        <Col>
          <img src="/images/logo3.png" alt="logo3" height="40" />
        </Col>
        <Col>
          <img src="/images/logo4.png" alt="logo4" height="40" />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ContactPage;
