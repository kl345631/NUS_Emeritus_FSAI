import React from "react";
import { Card, Button, Modal } from "react-bootstrap";

let showModal = false;
const handleClose = ()=>{
showModal = false;
}

export default function ListingImageModal({ listing, showModal, handleClose}){
return (
    <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
            <Modal.Title>{listing.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img
            src={listing.image}
            alt={listing.title}
            className="img-fluid"
            style={{ width: '100%' }}
            />
        </Modal.Body>
    </Modal>
)
}
