import { Helmet } from "react-helmet-async";
import { FaHome, FaPen, FaUser, FaUsers } from "react-icons/fa";
import { BiSolidCoupon } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useUsers from "../hooks/useUsers";
import useAuth from "../hooks/useAuth";

const DashBoard = () => {
    const {user} = useAuth();
    const [isAdmin] = useAdmin();
    const [users] = useUsers();
    const members = users.filter(usr=> usr.role == "member" && usr.email == user.email);
    const isUser = users.filter(usr=> usr.role == "user" && usr.email == user.email);

    return (
        <>
        <Helmet>
        <title>Quantum Tower | Dashboard</title>
        </Helmet>
        <div className="flex flex-col md:flex-row pt-4 px-2">
            {/* dashboard side bar */}
            <div className="w-72 mb-4 min-h-full md:min-h-screen bg-green-700 mr-3 rounded-xl text-white">
                <ul className="menu p-4 text-xl">
                    {members.length >0 ? <>
                    <h2 className="flex items-center text-lg text-red-200 text-center font-semibold p-4 "> <MdDashboard className="mr-2 text-3xl text-orange-300" /> Member Dashboard</h2>
                    <li>
                        <NavLink to="/dashboard/memberProfile"> <FaUser /> Member Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/makePayment"> <FaUser /> Make Payment</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentsHistory"> <FaUser /> Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/announcements"> <FaUser /> Announcements</NavLink>
                    </li>
                    </>
                    :
                    <></>
                    }
                    {
                        isAdmin ? <>
                        <h2 className="flex items-center text-lg text-red-200 text-center font-semibold p-4 "> <MdDashboard className="mr-2 text-3xl text-orange-300" /> Admin Dashboard</h2>
                        <li>
                            <NavLink to="/dashboard/adminProfile"> <FaUser /> Admin Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manageMembers"> <FaUsers /> Manage Members</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/adminAnnouncements"><GrAnnounce /> Announcements</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/agreementsRequest"> <FaPen /> Agreement Request</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manageCoupons"> <BiSolidCoupon /> Manage Coupons</NavLink>
                        </li>
                        </>
                         : 
                         <></>
                    }
                    {
                        isUser.length>0 ?<>
                        <h2 className="flex items-center text-lg text-orange-500 text-center font-semibold p-4 "> <MdDashboard className="mr-2 text-3xl text-white" /> User Dashboard <br />
                         </h2>
                         <li>
                            <NavLink to="/dashboard/userProfile"> <FaUser />  Profile</NavLink>
                         </li>
                        <li>
                             <NavLink to="/dashboard/announcements">Announcements</NavLink>
                        </li>
                        </> 
                        :
                        <></>
                    }
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