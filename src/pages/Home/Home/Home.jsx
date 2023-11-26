import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";
import AboutBuilding from "../AboutBuilding/AboutBuilding";
import ApartmentLocation from "../ApartmentLocation/ApartmentLocation";
import Banner from "../Banner/Banner";
import Coupons from "../Coupons/Coupons";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Quantum Tower | Home</title>
            </Helmet>
            <Banner />
            <Coupons />
            <AboutBuilding />
            <ApartmentLocation />
            <Footer />
        </div>
    );
};

export default Home;