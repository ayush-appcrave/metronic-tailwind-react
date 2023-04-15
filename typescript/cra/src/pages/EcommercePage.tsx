import { useEffect } from "react";
import { useDefaultLayout } from '../layouts/default';
import { useToolbar } from "../layouts/default/toolbar";
import { IntroBreadcrumbsType } from "../layouts/default/intro";
import { useLoading } from "../providers/LoadingProvider";

type ApiResponse = {
  message: string;
}

const EcommercePage = () => {
  const { pageLoading, setPageLoading } = useLoading();
  const { setIntroTitle, setIntroSubTitle, setIntroBreadcrumbs } = useToolbar();
  
  const breadcrumbs:IntroBreadcrumbsType = [
    { title: "Home", href: "/" },
    { title: "eCommerce", active: true }
  ];

  const simulateRestCall = async () => {
    setPageLoading(true);
    console.log('wow1:' + pageLoading);

    try {
      setTimeout(() => {
        setPageLoading(false);
        console.log('wow2:' + pageLoading);
      }, 3000); // simulate 2 second delay
    } catch (error) {
      console.error(error);
      setPageLoading(false);
      console.log('wow3:' + pageLoading);
    }
  };

  useEffect(() => {
    setIntroTitle("Dashboard");
    setIntroSubTitle("Sub-title");
    setIntroBreadcrumbs(breadcrumbs);  

    simulateRestCall();
  }, []); 
  
  return ( 
    <>
      eCommerce Page
    </>
  );
};

export { EcommercePage };
