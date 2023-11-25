const AboutBuilding = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-28">
      <div
        className="bg-fixed bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co/GR06z3h/cityscape.jpg)",
        }}
      >
        <div className=" justify-center md:px-28 py-32">
          <div className="bg-black bg-opacity-30 space-y-4 px-4 md:px-40 py-24">
            <h3 className="text-5xl uppercase text-white">
              Apartment Description
            </h3>
            <p className="text-white">
              Apartment Name: Quantum Tower <br />
              Company Name: Quantum HOLDINGS LIMITED <br />
              Total Land Area: 09 (Nine) Kathas. Land Ownership 100% Fresh.
              <br />
              Approved Floor: G + 9 (Ground Floor + Nine Floor Above). <br />
              100% Ensure Branded Raw Materials. <br />
              Secure Investment. <br />
              Facilities: Gas Connection from TITAS, Water supply from own Deep
              Tube well & WASA, Electric connection with Sub-Station, Generator,
              Solar panel, Two Superior Lifts, Specious community Hall, Green
              Zone, Loan facility and many more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;
