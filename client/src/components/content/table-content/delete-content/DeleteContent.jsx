import React from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteContent({ show, handleClose, deleteProduct }) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this player?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteContent;
