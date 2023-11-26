import { Helmet } from "react-helmet-async";
import ApartmentCard from "./ApartmentCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Apartment = () => {
  const axiosSecure = useAxiosSecure();
  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/apartments");
      return res.data;
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto mt-28">
      <Helmet>
        <title>Quantum Tower | Apartment</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {apartments.map((apartment) => (
          <ApartmentCard
            apartment={apartment}
            key={apartment._id}
          ></ApartmentCard>
        ))}
      </div>
    </div>
  );
};

export default Apartment;
