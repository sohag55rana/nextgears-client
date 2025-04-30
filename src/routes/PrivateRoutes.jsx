import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { RotatingLines } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
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
    console.log(loading, "loading");

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }}></Navigate>
};

export default PrivetRoutes;