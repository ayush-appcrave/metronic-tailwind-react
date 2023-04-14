import { useEffect, useState, PropsWithChildren } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useLoading } from "../providers/LoadingProvider";
import { AuthPage, Logout, useAuth } from "../auth";
import { DashboardPage, EcommercePage, MarketingPage } from "../pages";
import { ErrorsPage } from "../modules/errors";
import { 
	UsersListWrapper, 
	UsersListOverlayWrapper, 
	UsersListDrawersWrapper, 
	UsersListInlineEditingWrapper, 
	UsersListSubCRUDWrapper  
} from "../modules/users-management-api";
import { UpdateUserPage } from "../modules/users-management-api/components/edit-user/UpdateUserPage";
import {ViewUserPage} from "../modules/users-management-api/components/view/ViewUserPage";
import {DefaultLayout} from "../layouts/default";

const AppRouting = () => {
  const { currentUser } = useAuth();
  const { getLoading, setLoading } = useLoading();
	const [previousLocation, setPreviousLocation] = useState("");
	const lastPath = localStorage.getItem("lastPath") || "";
	const location = useLocation();

  console.log("last location:" + lastPath);

  useEffect(() => {
		//console.log("last location:" + lastPath);
 	}, [location]);

	useEffect(() => {
		setLoading("progressBar", true);
		setLoading("page", true);

		setPreviousLocation(location.pathname);		

		if(location.pathname === previousLocation){
			setPreviousLocation("");
		}	
		
		localStorage.setItem("lastPath", location.pathname);
		//console.log("previous location:" + previousLocation);
 	}, [location]);

	useEffect(() => {
		setLoading("progressBar", false);
		setLoading("page", false);
	}, [previousLocation]);
  
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="{lastPath}"/>}></Route>
      <Route path="error/*" element={<ErrorsPage />} />
      <Route path="logout" element={<Logout />} />
      
      {currentUser ? (
        <>
          {/* Redirect to Dashboard after success login/registartion */}
          <Route path="auth/*" element={<Navigate to="/dashboard" />} />
          <Route element={<DefaultLayout />}>
            <Route path="dashboard" element={<DashboardPage/>} />
            <Route path="ecommerce" element={<EcommercePage/>} />
            <Route path="marketing" element={<MarketingPage/>} />
            <Route path="users-management-api" element={<UsersListWrapper />} />
            <Route path="users-management-api-overlay-modal" element={<UsersListOverlayWrapper />} />
            <Route path="users-management-api-drawers" element={<UsersListDrawersWrapper />} />
            <Route path="users-management-api-inline-editing" element={<UsersListInlineEditingWrapper />} />
            <Route path="users-management-api-sub-crud" element={<UsersListSubCRUDWrapper />} />
            <Route path="edit/user/:id" element={<UpdateUserPage />} />
              <Route path="view/user/:id" element={<ViewUserPage />} />
            </Route>
          <Route path="*" element={<Navigate to="/error/404" />} />
          <Route index element={<Navigate to="/dashboard" />} />
        </>
      ) : (
        <>
          <Route path="auth/*" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </>
      )}
    </Routes> 
  );
};

export { AppRouting };
