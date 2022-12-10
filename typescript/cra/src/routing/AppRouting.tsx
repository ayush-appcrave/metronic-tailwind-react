import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AuthPage, Logout, useAuth } from "../providers/auth";
import { ErrorsPage } from "../modules/errors";
import { PrivateRouting } from "./PrivateRouting";

const AppRouting = () => {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes> 
    </BrowserRouter>
  );
};

export { AppRouting };
