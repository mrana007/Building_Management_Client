import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ApartmentCard from "./ApartmentCard";

const Apartment = () => {
    const [apartments, setApartments] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/apartments')
        .then(res=>res.json())
        .then(data=> setApartments(data))
    },[]);

  return (
    <div className="max-w-screen-xl mx-auto mt-28">
      <Helmet>
        <title>Quantum Tower | Apartment</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            apartments.map(apartment=> <ApartmentCard apartment={apartment} key={apartment._id}></ApartmentCard>)
        }
      </div>
    </div>
  );
};

export default Apartment;
