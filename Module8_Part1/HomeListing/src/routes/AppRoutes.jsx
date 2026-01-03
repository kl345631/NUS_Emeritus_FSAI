import { Routes, Route } from "react-router" // Don't forget the -dom part!
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage" // Import the AboutPage component
import ListingDetails from "../components/listings/ListingDetails"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/listings/:listingId" element={<ListingDetails />} />
        </Routes>
    )
}
export default AppRoutes 
