import { useEffect, useState, PropsWithChildren } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useLoading } from "../providers/LoadingProvider";

const CustomRoutes = ({ children }: PropsWithChildren) => {
  const { getLoading, setLoading } = useLoading();
	const [previousLocation, setPreviousLocation] = useState("");
	const location = useLocation();

	useEffect(() => {
		setPreviousLocation(location.pathname);
		
		setLoading("progressBar", true);

		if(location.pathname === previousLocation){
			setPreviousLocation("");
		}
 	}, [location]);

	useEffect(() => {
		setLoading("progressBar", false);
	}, [previousLocation]);
  
  return (
    <Routes>
			{children}
    </Routes>
  );
};

export { CustomRoutes };
