import { Container, Row, Col} from "react-bootstrap";
import ListingCard from "../components/listings/ListingCard";
import listings from "../services/data";
import AppRoutes from "../routes/AppRoutes";

export default function HomePage() {
    return (
        <Container>
            <h2 className="mb-4">Welcome to my Home Listings</h2>
            <Row >
                {listings.map((listing) => (
                    // sm={12} means 1 card per row on mobile
                    // md={4} means 3 cards per row on desktops (12 / 4 = 3) 
                    <Col key={listing.id} sm={12} md={4} className= "g-4" >
                        <ListingCard listing={listing} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}