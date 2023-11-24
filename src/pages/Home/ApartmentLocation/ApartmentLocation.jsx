import { CiLocationOn } from "react-icons/ci";
const ApartmentLocation = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center text-4xl font-semibold">Apartment Location</h2>
        <p className="text-center py-5">Welcome to your new home at <span className="font-bold text-lg italic">Quantum Tower!</span> We are thrilled to have you here. If you ever need anything, <br /> our team is here to help. Enjoy the comfort and convenience of your new space. </p>
      <div className="flex flex-col gap-3 justify-center mx-auto lg:relative px-4">
        <div className="card lg:w-1/3 bg-green-50 shadow-2xl lg:absolute lg:top-40 lg:right-12">
          <div className="card-body">
            <h2 className="card-title">Monthly Rentals in Gulshan</h2>
            <p>Discover long-term rentals that feel like home for stays of a month or longer.</p>
            <div className="border border-gray-400 rounded-lg px-2 py-4">
                <h2 className="flex items-center text-lg font-medium"> <CiLocationOn className="text-2xl font-extrabold mr-2" /> Location</h2>
                <p>Gulshan, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
          <img
            className="rounded-xl lg:w-4/6"
            src="https://i.ibb.co/QpK8QC5/32706.jpg"
            alt=""
          />
        
      </div>
    </div>
  );
};

export default ApartmentLocation;