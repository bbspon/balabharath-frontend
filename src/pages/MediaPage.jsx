// MediaPage.jsx – Page 5 of 5

import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Modal } from 'react-bootstrap';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import image2 from "../assets/Nuru.svg"; // adjust path as needed


const MediaPage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []); 
const magazineImages = [image2, image2, image2];

  return (
    <Container fluid className="py-5 bg-white">
      {/* Hero Section */}
      <div className="bg-dark text-white text-center p-5 mb-4">
        <h1>In the Media</h1>
        <p>
          Explore press, podcasts, and all the buzz around Bala Bharath J’s work
        </p>
      </div>

      {/* Press Coverage */}
      <h2 className="text-center mb-4">📣 Featured In</h2>
      <Row className="justify-content-center mb-5">
        {["Forbes", "TechCrunch", "Inc42", "Entrepreneur"].map(
          (media, index) => (
            <Col md={3} sm={6} xs={12} key={index} className="mb-4">
              <Card className="h-100 shadow-sm" data-aos="fade-up">
                <Card.Img
                  variant="top"
                  src={`https://via.placeholder.com/300x150?text=${media}`}
                />
                <Card.Body>
                  <Card.Title>{media}</Card.Title>
                  <Card.Text>
                    "From Prompt to Product – How Bala Bharath is reshaping
                    startup automation."
                  </Card.Text>
                  <Button variant="primary" size="sm">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>

      {/* Interview Videos Carousel */}
      <h2 className="text-center mb-4">🎥 Video Interviews</h2>
      <Carousel className="mb-5">
        {magazineImages.map((img, i) => (
          <Carousel.Item key={i} className="text-center">
            <img
              src={img}
              alt={`Magazine ${i + 1}`}
              className="img-fluid"
              style={{
                maxHeight: "500px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Quote Wall */}
      <h2 className="text-center mb-4">🗣 Media Quotes</h2>
      <Row className="mb-5">
        <Col md={6}>
          <blockquote className="blockquote p-4 bg-light">
            <p>
              "He’s not just a founder. He’s a full-stack visionary powered by
              AI."
            </p>
            <footer className="blockquote-footer">Inc42</footer>
          </blockquote>
        </Col>
        <Col md={6}>
          <blockquote className="blockquote p-4 bg-light">
            <p>
              "The fastest prototype-to-product founder we’ve seen this decade."
            </p>
            <footer className="blockquote-footer">Entrepreneur Magazine</footer>
          </blockquote>
        </Col>
      </Row>

      {/* Magazine Covers Carousel */}
      <h2 className="text-center mb-4">📰 Magazine Highlights</h2>
      <Carousel className="mb-5">
        {[1, 2, 3].map((i) => (
          <Carousel.Item key={i} className="text-center">
            <img
              src={`https://via.placeholder.com/400x500?text=Magazine+Cover+${i}`}
              alt={`Magazine ${i}`}
              className="img-fluid"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Additional Media Gallery */}
      <h2 className="text-center mb-4">📷 Media Moments</h2>
      <Row className="mb-5">
        {[1, 2, 3, 4].map((i) => (
          <Col md={3} sm={6} xs={12} key={i}>
            <Card data-aos="zoom-in" className="mb-3">
              <Card.Img
                variant="top"
                src={`https://via.placeholder.com/300x200?text=Event+${i}`}
              />
              <Card.Body>
                <Card.Text>Event Highlight {i}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Media Inquiry CTA */}
      <div className="text-center bg-light p-5">
        <h4>📬 For media interviews or inquiries</h4>
        <Button variant="outline-primary" href="mailto:press@bbscart.com">
          Email Press Team
        </Button>
      </div>
    </Container>
  );
};

export default MediaPage;
