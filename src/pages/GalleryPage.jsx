// import React, { useState, useEffect } from "react";
//  import Container from "react-bootstrap/Container";
// import Carousel from "react-bootstrap/Carousel";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Badge from "react-bootstrap/Badge";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import NavbarCommon from "./NavbarCommon";

// // Example galleryItems: replace with your real items
// const galleryItems = [
//   {
//     type: "image",
//     img: "/assets/gallery1.jpg",
//     title: "CRM Dashboard",
//     tag: "CRM",
//   },
//   {
//     type: "image",
//     img: "/assets/gallery2.jpg",
//     title: "Gold Investment UI",
//     tag: "Golddex",
//   },
//   {
//     type: "video",
//     link: "https://www.youtube.com/embed/yourvideoID",
//     title: "NURU Trailer",
//     tag: "NURU",
//   },
//   {
//     type: "image",
//     img: "/assets/gallery3.jpg",
//     title: "Prompt Log Insights",
//     tag: "Prompt Logs",
//   },
//   // Add more items...
// ];

// const GalleryPage = () => {
//   const [modalItem, setModalItem] = useState(null);
//   const [activeTag, setActiveTag] = useState("All");

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const filteredItems =
//     activeTag === "All"
//       ? galleryItems
//       : galleryItems.filter((item) => item.tag === activeTag);

//   const tags = ["All", "CRM", "Golddex", "NURU", "Prompt Logs"];

//   return (
//     <>
//       <NavbarCommon />

//       <Container fluid className="bg-white py-5">
//         {/* Hero */}
//         <div className="text-center  text-dark p-5">
//           <h1 className="fw-bold display-5" style={{ color: "#008080" }}>
//             Gallery of Work
//           </h1>
//           <p className="lead">Behind every pixel, there’s a prompt.</p>
//         </div>

//         {/* Featured Video Carousel */}
//         <h2 className="text-center my-5">Featured Showcase</h2>
//         <Carousel>
//           {galleryItems
//             .filter((item) => item.type === "video")
//             .map((item, idx) => (
//               <Carousel.Item key={idx}>
//                 <div className="d-flex justify-content-center">
//                   <iframe
//                     width="720"
//                     height="405"
//                     src={item.link}
//                     title={item.title}
//                     frameBorder="0"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//                 <Carousel.Caption>
//                   <h5>{item.title}</h5>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             ))}
//         </Carousel>

//         {/* Filter Tags */}
//         <div className="text-center my-4">
//           {tags.map((tag, i) => (
//             <Button
//               key={i}
//               variant={tag === activeTag ? "primary" : "outline-primary"}
//               className="mx-2 my-1"
//               onClick={() => setActiveTag(tag)}
//             >
//               {tag}
//             </Button>
//           ))}
//         </div>

//         {/* Gallery Grid */}
//         <Row className="px-3">
//           {filteredItems.map((item, idx) => (
//             <Col
//               md={4}
//               sm={6}
//               xs={12}
//               className="mb-4"
//               key={idx}
//               data-aos="fade-up"
//             >
//               <Card className="h-100 shadow-sm">
//                 {item.type === "image" ? (
//                   <Card.Img variant="top" src={item.img} alt={item.title} />
//                 ) : (
//                   <div className="ratio ratio-16x9">
//                     <iframe
//                       src={item.link}
//                       title={item.title}
//                       allowFullScreen
//                     ></iframe>
//                   </div>
//                 )}
//                 <Card.Body>
//                   <Card.Title>{item.title}</Card.Title>
//                   <Badge bg="secondary">{item.tag}</Badge>
//                   <div className="mt-3 d-flex justify-content-between">
//                     <Button size="sm" onClick={() => setModalItem(item)}>
//                       View Fullscreen
//                     </Button>
//                     {item.type === "image" && (
//                       <a
//                         href={item.img}
//                         download
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Download
//                       </a>
//                     )}
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* Modal */}
//         <Modal
//           show={!!modalItem}
//           onHide={() => setModalItem(null)}
//           size="lg"
//           centered
//         >
//           {modalItem && (
//             <>
//               <Modal.Header closeButton>
//                 <Modal.Title>{modalItem.title}</Modal.Title>
//               </Modal.Header>
//               <Modal.Body className="text-center">
//                 {modalItem.type === "image" ? (
//                   <img
//                     src={modalItem.img}
//                     alt={modalItem.title}
//                     className="img-fluid"
//                   />
//                 ) : (
//                   <iframe
//                     width="100%"
//                     height="400"
//                     src={modalItem.link}
//                     title={modalItem.title}
//                     frameBorder="0"
//                     allowFullScreen
//                   ></iframe>
//                 )}
//               </Modal.Body>
//             </>
//           )}
//         </Modal>

//         {/* CTA */}
//         <div className="text-center mt-5">
//           <h4>Want a walkthrough or private demo?</h4>
//           <Button variant="primary" href="/meet" className="m-2">
//             Book a Meet
//           </Button>
//           <Button variant="outline-dark" href="/contact" className="m-2">
//             Contact Me
//           </Button>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default GalleryPage;
import { Container, Row, Col, Alert } from "react-bootstrap";
import NavbarCommon from "./NavbarCommon"; // adjust path as needed

const ComingSoon = () => {
  return (
    <> <NavbarCommon />
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="mb-3">🚧 We're Working On It!</h2>
          <Alert variant="info">
            <p>
              This feature is currently under development. We're working hard to
              bring you something awesome!
            </p>
            <h3 className="mb-0">
              Stay tuned — it will be launching <br/><strong>Comming soon</strong>!
            </h3>
          </Alert>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ComingSoon;
