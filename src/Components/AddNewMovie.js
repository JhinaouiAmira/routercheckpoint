import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function AddNewMovie({ movie, setMovie }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState("");

  const add = (newMovie) => {
    return setMovie([...movie, newMovie]);
  };
  const handleAdd = () => {
    let newMovie = { title, description, posterUrl, rate };
    add(newMovie);
    setTitle("");
    setDescription("");
    setPosterUrl("");
    setRate("");
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        style={{ marginLeft: "600px", marginBottom: "100px" }}
        variant="primary"
        onClick={handleShow}
      >
        ADD Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>description</label>
          <input
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>posterUrl</label>
          <input
            type="text"
            placeholder="Enter PosterUrl here"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
          <label>rate</label>
          <input
            type="text"
            placeholder="Enter rate here"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAdd()}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddNewMovie;
