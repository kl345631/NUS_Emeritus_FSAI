import React, { useState } from "react";
import { useParams } from "react-router";

export default function ListingDetails() {
    const{ListingId} = useParams;
    const[listing, setListing] = useState(null)
    const[loading,setLoading] = useState(true)
    const[error, setError] = useState(null)

    return (
        <>
        <h1>{ListingId}</h1>
        </>
    )
}