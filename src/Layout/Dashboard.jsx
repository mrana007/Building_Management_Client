import { Helmet } from "react-helmet-async";
import { FaHome, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {

    return (
        <>
        <Helmet>
        <title>Quantum Tower | Dashboard</title>
        </Helmet>
        <div className="flex flex-col md:flex-row pt-4 px-2">
            {/* dashboard side bar */}
            <div className="w-60 mb-4 min-h-full md:min-h-screen bg-green-700 mr-3 rounded-xl text-white">
                <ul className="menu p-4 text-2xl">
                    <li>
                        <NavLink to="/dashboard/userProfile"> <FaUser /> My Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/announcements">Announcements</NavLink>
                    </li>
                    {/* shared nav link */}
                    <div className="divider divider-success"></div>
                    <li>
                        <NavLink to="/">
                        <FaHome className="text-xl"></FaHome>
                        Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
        </>
    );
};

export default DashBoard;