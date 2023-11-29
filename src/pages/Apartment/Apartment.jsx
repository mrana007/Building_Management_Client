import { Helmet } from "react-helmet-async";
import ApartmentCard from "./ApartmentCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const Apartment = () => {
  const axiosSecure = useAxiosSecure();
  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/apartments");
      return res.data;
    },
  });

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const indexOfLastApartment = (currentPage + 1) * itemsPerPage;
  const indexOfFirstApartment = indexOfLastApartment - itemsPerPage;
  const currentApartments = apartments.slice(
    indexOfFirstApartment,
    indexOfLastApartment
  );

  return (
    <div className="max-w-screen-xl mx-auto mt-28">
      <Helmet>
        <title>Quantum Tower | Apartment</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentApartments.map((apartment) => (
          <ApartmentCard key={apartment._id} apartment={apartment} />
        ))}
      </div>

      {/* Pagination */}
      <nav className="flex items-center justify-center py-10">
        {[...Array(Math.ceil(apartments.length / itemsPerPage)).keys()].map(
          (page) => (
            <button
              key={page}
              type="button"
              className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
                currentPage === page
                  ? "bg-gray-200 text-gray-800"
                  : "border border-gray-200 text-gray-800 hover:bg-gray-100"
              } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500`}
              onClick={() => setCurrentPage(page)}
            >
              {page + 1}
            </button>
          )
        )}
      </nav>
    </div>
  );
};

export default Apartment;
