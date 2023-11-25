
import Footer from "../../Shared/Footer/Footer";
import AboutBuilding from "../AboutBuilding/AboutBuilding";
import ApartmentLocation from "../ApartmentLocation/ApartmentLocation";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner />
            <AboutBuilding />
            <ApartmentLocation />
            <Footer />
        </div>
    );
};

export default Home;