import {Button, Card, Modal} from "react-bootstrap"
import React from "react";
import { useState } from "react"
import ListingImageModal from "./ListingImage";
import { Link } from "react-router";

const linkText = 'Know more...'



export default function ListingCard({listing}) {
    // State variable to track the modal's visibility.
    const [showModal, setShowModal] = useState(false); //hidden

    const handleShow = () => setShowModal(true); //User Clicks Image and setshowmodel to true

    const handleClose = ()=> {
        setShowModal(false); 
    }

    return (
        <Card className="shadow-sm h-100">
            <Card.Img variant="top" src={listing.image} alt={listing.title} style={{ height: "200px", objectFit: "cover" }} 
            // Attach the event handler to the image
            onClick={handleShow} />
            {showModal === true && <ListingImageModal listing={listing} showModal = {showModal} handleClose = {handleClose} />} 
            <Card.Body className="d-flex flex-column"> 
                <Card.Title className="fs-6">
                    {listing.title}
                </Card.Title>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                <Link to={`/listings/${listing.id}`} >
                {linkText}
                </Link>
                </a>
            </Card.Body>
        </Card>
    )
}