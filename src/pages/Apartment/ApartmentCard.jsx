const ApartmentCard = ({ apartment }) => {
  const { image, floorNo, block, apartmentNo, rent } = apartment;
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
          <p className="block font-sans text-base antialiased font-light leading-relaxed">
            Rent: ${rent}
          </p>
        </div>
        <div className="p-6 pt-1">
          <button
            className="block w-full select-none rounded-lg bg-green-800 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
