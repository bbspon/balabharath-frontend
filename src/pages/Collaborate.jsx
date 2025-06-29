import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import NavbarCommon from "./NavbarCommon";

const Collaborate = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [contribution, setContribution] = useState("");
  const [roles, setRoles] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/collaborators/apply",
        {
          fullName,
          email,
          roles,
          linkedin,
          contribution,
        }
      );
      setSuccessMsg(res.data.message);
      setErrorMsg("");
      setFullName("");
      setEmail("");
      setLinkedin("");
      setContribution("");
      setRoles([]);
    } catch (err) {
      setErrorMsg("Error submitting form");
      setSuccessMsg("");
      console.error(err);
    }
  };

  return (
        <>
      <NavbarCommon />
    <Container className="mt-5">
      <h2 className="mb-4">Collaborate with Us</h2>

      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="role" className="mb-3">
          <Form.Label>Role</Form.Label>
          <div className="d-flex flex-wrap gap-3">
            {[
              "Tech Contributor",
              "Business Owner",
              "Startup Founder",
              "Mentor",
              "Student",
            ].map((role) => (
              <Form.Check
                key={role}
                type="checkbox"
                label={role}
                value={role}
                checked={roles.includes(role)}
                onChange={(e) => {
                  const value = e.target.value;
                  if (e.target.checked) {
                    setRoles([...roles, value]);
                  } else {
                    setRoles(roles.filter((r) => r !== value));
                  }
                }}
              />
            ))}
          </div>
        </Form.Group>

        <Form.Group controlId="linkedin" className="mb-3">
          <Form.Label>LinkedIn or Website</Form.Label>
          <Form.Control
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="contribution" className="mb-3">
          <Form.Label>How would you like to contribute?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Apply Now
        </Button>
      </Form>
    </Container>
      </>
  );
};

export default Collaborate;
