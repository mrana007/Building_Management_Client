import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ApartmentCard = ({ apartment }) => {
  const { _id, image, floorNo, block, apartmentNo, rent } = apartment;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const status = "pending";
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];
  const axiosSecure = useAxiosSecure();

  const handleAgreement = (room)=>{
    console.log(room);
    if( user && user?.email){
        const agreementData = {
            agreementId: _id,
            userName: user?.displayName,
            userEmail: user?.email,
            image,
            floorNo,
            block,
            apartmentNo,
            rent,
            date: formattedDate,
            status,
        }
        axiosSecure.post('/agreements', agreementData)
        .then(res=>{
            // console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Agreement request successfully",
                    showConfirmButton: false,
                    timer: 2500
                  });
            }
        })
    }
    else{
        Swal.fire({
            title: "You are not Logged In",
            text: "Please login to do agreement",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   sent the user to the login page
            navigate('/login', {state: {from:location}});
            }
          });
    }   
  }

  return (
    <div>
      <div className="relative flex w-full max-w- flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative cursor-pointer group mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src={image} alt="ui/ux review check" className="h-60 w-96 group-hover:scale-110" />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              Block Name: {block}
            </h5>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            Apartment Number: {apartmentNo}
          </p>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            Floor Number: {floorNo}
          </p>
          <p className="block font-sans text-black">
            Rent: ${rent}
          </p>
        </div>
        <div className="p-6 pt-1">
          {
          user?.role==='user' ?
          <>
          <button className="disabled: block w-full select-none rounded-lg bg-green-800 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true">Agreement</button>
          </>
          :                  
          <>
          <button
            onClick={()=>handleAgreement(apartment)}
            className="block w-full select-none rounded-lg bg-green-800 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true">
            Agreement
          </button>
          </>
            
          }
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
