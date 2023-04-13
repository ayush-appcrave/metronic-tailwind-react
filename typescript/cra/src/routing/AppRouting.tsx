import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AuthPage, Logout, useAuth } from "../auth";
import { ErrorsPage } from "../modules/errors";
import { CustomRoutes } from "./CustomRoutes";
import { PrivateRouting } from "./PrivateRouting";

const AppRouting = () => {
  const { currentUser } = useAuth();
  
  return (
    <BrowserRouter>
      <CustomRoutes>
        <Route path="error/*" element={<ErrorsPage />} />
        <Route path="logout" element={<Logout />} />
        {currentUser ? (
          <>
            <Route path="/*" element={<PrivateRouting />} />
            <Route index element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <>
            <Route path="auth/*" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </>
        )}
      </CustomRoutes> 
    </BrowserRouter>
  );
};

export { AppRouting };
