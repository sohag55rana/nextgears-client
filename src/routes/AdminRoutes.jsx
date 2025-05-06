import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";
import useAdmin from "../hooks/useAdmin";


const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();


    if (loading || isAdminLoading) {
        return (<div className="flex h-screen items-center justify-center">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="blue"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />
            <p className="text-lg text-gray-600">Loading, please wait...</p>
        </div>)
    }
    // console.log(loading, "loading");

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }}></Navigate>
};

export default AdminRoutes;