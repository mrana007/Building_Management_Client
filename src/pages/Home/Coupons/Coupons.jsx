

const Coupons = () => {
    return (
        <div className="max-w-screen-xl mx-auto mb-12">
            <div>
            <h2 className="text-center text-4xl font-semibold text-emerald-700">Coupons</h2>
            <p className="text-center py-5 px-1">
            Embark on a journey to elevated living at <span className="text-xl font-semibold">Quantum Tower</span> Apartments! Seize the moment and <br /> apply coupon code during your leasing process to unlock exclusive savings on your dream apartment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <img src="https://i.ibb.co/56tYGyX/1.png" alt="coupon" />
                <img src="https://i.ibb.co/zXNbB9v/2.png" alt="coupon" />
                <img src="https://i.ibb.co/g9P4tmc/3.png" alt="coupon" />
                <img src="https://i.ibb.co/7Q8hQMB/4.png" alt="coupon" />
            </div>
            </div>
            
        </div>
    );
};

export default Coupons;