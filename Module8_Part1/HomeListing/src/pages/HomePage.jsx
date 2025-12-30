
import ListingCard from "../components/listings/ListingCard";

let listing = [{id:1, title: "Cozy apartment in City Center", image:"public/images/house.jpg"},
    { id: 2, title: "Spacious Villa with Garden", image:"public/images/house.jpg" },
    { id: 3, title: "Modern Studio near Metro", image:"public/images/house.jpg" },
    { id: 4, title: "Luxury Penthouse with Pool", image:"public/images/house.jpg" },
    { id: 5, title: "Family Home in Suburbs", image: "public/images/house.jpg"},
]

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to my HomeListing App</h1>
            <p>
                listing.map({listing}) => (
                    key={listing.id}
                    <ListingCard listing={listing} />    
                )
                          
            </p>
        </div>
    );
}