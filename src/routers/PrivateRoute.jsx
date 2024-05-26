/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()

    if (loading) {
        return <Loading />;
    }
    if (user) {
        return children;
    } else {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }
};

export default PrivateRoute;