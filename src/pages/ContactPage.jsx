// ContactPage.jsx

import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Spinner, Alert } from "react-bootstrap";
import NavbarCommon from "./NavbarCommon";
import linkedin from "../assets/linkedin.png"
import whatsapp from "../assets/Whatsapp.png"
import instagram from "../assets/instagram.png"
import youtube from "../assets/youtube.png"

import axios from 'axios'; // Add this at the top
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

  try {
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("subject", formData.subject);
    form.append("message", formData.message);
    if (formData.file) {
      form.append("file", formData.file);
    }

    const res = await axios.post("http://localhost:5000/api/contact", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res.data); // For debug
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", file: null });
    if (fileInputRef.current) fileInputRef.current.value = null;
  } catch (err) {
    console.error("Submit Error:", err);
    setLoading(false);
    alert("Something went wrong. Please try again.");
  }
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
         <>
  <h4 className="text-center mt-4">Follow Us on Social Media</h4>

  <Row className="text-center mt-3 mb-4">
    <Col>
      <a href="https://www.linkedin.com/in/bala-bharath-jayasingh-77a4bb22/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" height="80" />
      </a>
    </Col>

    <Col>
      <a href="https://wa.me/919600729596" target="_blank" rel="noopener noreferrer">
        <img src={whatsapp} alt="WhatsApp" height="80" />
      </a>
    </Col>

    <Col>
      <a href="https://www.youtube.com/@BBS_CATALYST" target="_blank" rel="noopener noreferrer">
        <img src={youtube} alt="YouTube" height="80" />
      </a>
    </Col>

    <Col>
      <a href="https://www.instagram.com/bbscart/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" height="80" />
      </a>
    </Col>
  </Row>
</>
    </Container>
    </>
  );
};

export default ContactPage;
