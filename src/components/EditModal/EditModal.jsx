import React from 'react';
import {Button, Modal} from 'react-bootstrap';

const EditModal = ({show, handleClose, contactToEdit, setContactToEdit, updateContact}) => {

    function handleValues(e){
        let editedContact = {
            ...contactToEdit,
            [e.target.name]: e.target.value
        }
        setContactToEdit(editedContact)
    }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Эдит</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
            <input onChange={handleValues} value={contactToEdit.name} className="mb-1" type="text" placeholder="Name" name="name" />
            <input onChange={handleValues} value={contactToEdit.phone} className="mb-1" type="number" placeholder="Phone" name="phone" />
            <input onChange={handleValues} value={contactToEdit.image} className="mb-1" type="text" placeholder="Image URL" name="image" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateContact()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

};

export default EditModal;