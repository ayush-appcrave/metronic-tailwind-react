import { useEffect } from "react";
import { useDefaultLayout } from '../layouts/default';
import { useToolbar } from "../layouts/default/toolbar";
import { IntroBreadcrumbsType } from "../layouts/default/intro";

const MarketingPage = () => {
  const { setIntroTitle, setIntroSubTitle, setIntroBreadcrumbs } = useToolbar();
  
  useEffect(() => {
    setIntroTitle("");
    setIntroSubTitle("");
    setIntroBreadcrumbs([]);  
  }, []); 

  return ( 
    <>
      Marketing Page
    </>
  );
};

export { MarketingPage };
