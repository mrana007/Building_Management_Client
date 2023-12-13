const FloorTab = ({floor}) => {
  const {name, image, beds, baths, sqf } = floor;
  return (
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 border px-2">
          <h2 className="text-xl font-bold text-black pb-20 pt-10">Apartment Name: {name}</h2>
          <hr />
          <h2 className="py-4">Bed Room:{beds}</h2>
          <hr />
          <h2 className="py-4">Baths: {baths}</h2>
          <hr />
          <h2 className="py-4">Square Feet: {sqf}</h2>
        </div>
        <div className="flex-1 w-80 border mx-auto"><img src={image} /></div>
      </div>
  );
};

export default FloorTab;
