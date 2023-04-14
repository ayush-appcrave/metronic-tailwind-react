import { useEffect } from "react";
import { useDefaultLayout } from '../layouts/default';
import { useToolbar } from "../layouts/default/toolbar";
import { IntroBreadcrumbsType } from "../layouts/default/intro";

const DashboardPage = () => {
  const { setIntroTitle, setIntroSubTitle, setIntroBreadcrumbs } = useToolbar();
  
  const breadcrumbs:IntroBreadcrumbsType = [
    { title: "Home", href: "/" },
    { title: "Dashboard", active: true }
  ];

  useEffect(() => {
    setIntroTitle("Dashboard");
    setIntroSubTitle("Sub-title");
    setIntroBreadcrumbs(breadcrumbs);  
  }, []); 

  return ( 
    <>
      Dashboard Page
    </>
  );
};

export { DashboardPage };
