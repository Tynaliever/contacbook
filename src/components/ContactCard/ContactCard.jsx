import React from 'react';
import { Card, Button } from "react-bootstrap";

const ContactCard = ({ item, deleteContact, getContactToEdit }) => {
    return (
        <div>
            <Card className="m-2" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.image}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.phone}</Card.Text>
                    <Button variant="danger" className="m-1" onClick={() => deleteContact(item.id)}>
                        Delete
                    </Button>
                    <Button onClick={() => getContactToEdit(item)} variant="success" className="m-1">
                         Edit
                      </Button>
                     </Card.Body>
             </Card>
        </div>
    );
};

export default ContactCard;