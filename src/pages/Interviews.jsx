// import React, { useState } from "react";
// import { Container, Row, Col, Card, Modal, Button, Tabs, Tab } from "react-bootstrap";
// import NavbarCommon from "./NavbarCommon";

// const interviews = {
//   video: [
//     {
//       title: "Bala on Visionary Leadership",
//       platform: "YouTube",
//       url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//       thumbnail: "/assets/interviews/video1.jpg",
//     },
//     {
//       title: "AI & Automation for MSMEs",
//       platform: "Startup TV",
//       url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//       thumbnail: "/assets/interviews/video2.jpg",
//     },
//   ],
//   podcast: [
//     {
//       title: "Podcast: The Founder’s Journey",
//       platform: "Spotify",
//       url: "https://open.spotify.com/episode/xyz",
//       thumbnail: "/assets/interviews/podcast1.jpg",
//     },
//   ],
//   text: [
//     {
//       title: "Founder Interview: Scaling with Purpose",
//       platform: "TechCrunch India",
//       url: "#",
//       thumbnail: "/assets/interviews/text1.jpg",
//     },
//   ],
// };

// const Interviews = () => {
//   const [show, setShow] = useState(false);
//   const [selected, setSelected] = useState(null);

//   const openModal = (item) => {
//     setSelected(item);
//     setShow(true);
//   };

//   return (
//     <>
//       <NavbarCommon />

//       <section className="py-5 bg-white">
//         <Container>
//           <h2 className="text-center fw-bold mb-4">🎙️ Interviews</h2>
//           <p className="text-center text-muted mb-5">
//             Dive into conversations, keynote appearances, and thought leadership from Bala Bharath.
//           </p>

//           <Tabs defaultActiveKey="video" className="mb-4 justify-content-center">
//             {Object.keys(interviews).map((type) => (
//               <Tab eventKey={type} title={type.charAt(0).toUpperCase() + type.slice(1)} key={type}>
//                 <Row className="mt-4">
//                   {interviews[type].map((item, idx) => (
//                     <Col md={6} lg={4} className="mb-4" key={idx}>
//                       <Card className="shadow-sm border-0 h-100">
//                         <Card.Img
//                           variant="top"
//                           src={item.thumbnail}
//                           onClick={() => openModal(item)}
//                           style={{ cursor: "pointer" }}
//                         />
//                         <Card.Body>
//                           <h5 className="fw-bold">{item.title}</h5>
//                           <p className="text-muted">{item.platform}</p>
//                           <Button
//                             variant="outline-primary"
//                             size="sm"
//                             onClick={() => openModal(item)}
//                           >
//                             View
//                           </Button>
//                         </Card.Body>
//                       </Card>
//                     </Col>
//                   ))}
//                 </Row>
//               </Tab>
//             ))}
//           </Tabs>

//           {/* Video / External Modal */}
//           <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
//             <Modal.Header closeButton>
//               <Modal.Title>{selected?.title}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body className="p-0">
//               {selected?.url?.includes("youtube") ? (
//                 <iframe
//                   width="100%"
//                   height="400"
//                   src={selected.url}
//                   title="Interview"
//                   allowFullScreen
//                 />
//               ) : selected?.url?.includes("spotify") ? (
//                 <iframe
//                   src={selected.url}
//                   width="100%"
//                   height="232"
//                   frameBorder="0"
//                   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//                   loading="lazy"
//                 ></iframe>
//               ) : (
//                 <div className="p-4">
//                   <p>Text-based interview: <a href={selected?.url} target="_blank" rel="noreferrer">Read Here</a></p>
//                 </div>
//               )}
//             </Modal.Body>
//           </Modal>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Interviews;
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
