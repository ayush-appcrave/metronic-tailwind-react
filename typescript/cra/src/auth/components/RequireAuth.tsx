import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../providers/useAuthContext";

const RequireAuth = () => {
    const { auth } = useAuthContext();
    const location = useLocation();
    

    return auth ? <Outlet /> : <Navigate to="/auth/login" state={{ from: location }} replace />;
}

export { RequireAuth }