import { FaAd, FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import logoImg from '../../assets/image/Banner/logo.png'
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open pt-24">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center text-center justify-between border-4 border-black text-xl">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Click Here
                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu  text-base-content min-h-full w-80 p-4 text-xl bg-yellow-500">
                    <div className=" h-2/4 mb-10">
                        <img src={logoImg} alt="" />
                    </div>
                    {/* <!-- Sidebar content here --> */}
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> User Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageItem"><FaList></FaList>Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/bookings"><FaAd></FaAd>Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allUsers"><FaUser></FaUser>All Users</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> Cart ({cart.length})</NavLink></li>
                                <li><NavLink to="/dashboard/review"><FaAd></FaAd> Review</NavLink></li>

                                <li><NavLink to="/dashboard/booking"><FaBook></FaBook> Bookings</NavLink></li>
                            </>
                    }
                    {/* sheard thing */}
                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/models"><FaSearch></FaSearch> Model</NavLink></li>
                    <li><NavLink to="/about"><FaEnvelope></FaEnvelope> Contact</NavLink></li>


                </ul>
            </div>
        </div>
    );
};

export default Dashboard;