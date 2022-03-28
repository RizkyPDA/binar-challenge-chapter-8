import React, { useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

function AddContent({ show, handleClose, setPlayers }) {
  const [userName, setUserName] = useLocalStorage("userName", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");
  const [exp, setExp] = useLocalStorage("exp", "");
  const [lvl, setLvl] = useLocalStorage("lvl", "");

  const resetForm = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setExp("");
    setLvl("");
  };

  const addNewContent = () => {
    if (!userName) {
    } else if (!exp) {
    } else if (!email) {
    } else if (!password) {
    } else {
      setPlayers((prevProduct) => {
        if (prevProduct.length > 0) {
          let id = Number(prevProduct[prevProduct.length - 1].id) + 1;

          resetForm();
          handleClose();
          return [...prevProduct, { id: id, userName, email, password, exp }];
        } else {
          let id = 1;
          resetForm();
          handleClose();

          return [...prevProduct, { id: id, userName, email, password, exp }];
        }
      });
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Add New Player</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Player Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Player Username"
                autoFocus
                required
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Player Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Player Email"
                autoFocus
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Player Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Player Password"
                autoFocus
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
              <Form.Label>Player Exp</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insert Player Exp"
                required
                value={exp}
                onChange={(e) => {
                  setExp(e.target.value);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={addNewContent}>
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddContent;
