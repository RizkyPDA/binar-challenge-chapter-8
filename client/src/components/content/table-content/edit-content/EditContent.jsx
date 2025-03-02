import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

function EditContent({
  show,
  handleClose,
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  exp,
  setExp,
  lvl,
  setLvl,
  editPlayer,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Edit Player</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Player Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit Player Username"
                autoFocus
                required
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Player Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Update Player Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Player Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Update Player Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Player Experience</Form.Label>
              <Form.Control
                type="number"
                placeholder="Update Player Exp"
                required
                value={exp}
                onChange={(e) => {
                  setExp(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Player Level</Form.Label>
              <Form.Control
                type="number"
                placeholder="Update Player Lvl"
                required
                value={lvl}
                onChange={(e) => {
                  setLvl(e.target.value);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={editPlayer}>
              Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditContent;
