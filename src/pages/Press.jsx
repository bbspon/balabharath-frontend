import React from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import NavbarCommon from "./NavbarCommon";

const pressData = {
  2024: [
    {
      title: "Bala Bharath's Veetru Raises Series A",
      source: "TechCrunch India",
      img: "/assets/press/series-a.jpg",
      link: "#",
    },
    {
      title: "BBSCART Disrupts Indian Retail Market",
      source: "The Hindu Business Line",
      img: "/assets/press/bbscart.jpg",
      link: "#",
    },
  ],
  2023: [
    {
      title: "Startup Awards Finalist",
      source: "YourStory",
      img: "/assets/press/award.jpg",
      link: "#",
    },
  ],
};

const Press = () => (
  <>
    <NavbarCommon />

    <section className="bg-light py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4" style={{ color: "#008080" }}>
          🗞️ Press & Media
        </h2>
        <p className="text-center text-muted mb-5">
          Explore how Bala Bharath and Veetru have been featured across renowned
          tech and business platforms.
        </p>

        {Object.entries(pressData).map(([year, articles]) => (
          <div key={year} className="mb-5">
            <h4 className="fw-bold text-primary mb-4">{year}</h4>
            <Row>
              {articles.map((item, idx) => (
                <Col md={6} lg={4} key={idx} className="mb-4">
                  <Card className="shadow-sm border-0 h-100">
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <h5 className="fw-bold">{item.title}</h5>
                      <p className="text-muted small">{item.source}</p>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={item.link}
                      >
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  </>
);

export default Press;
