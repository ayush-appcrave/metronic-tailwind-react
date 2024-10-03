import { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router';
import { useMenuCurrentItem } from '@/components/menu';
import { useMenus } from '@/providers';
import { useDemo2Layout } from '../';
const Main = () => {
  const {
    layout
  } = useDemo2Layout();
  const {
    pathname
  } = useLocation();
  const {
    getMenuConfig
  } = useMenus();
  const menuConfig = getMenuConfig('primary');
  const menuItem = useMenuCurrentItem(pathname, menuConfig);
  useEffect(() => {
    // Remove the class when the component is unmounted
    return () => {};
  }, [layout]);
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('layout-initialized');
    }, 1000); // 1000 milliseconds

    // Remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('layout-initialized');
      clearTimeout(timer);
    };
  }, []);
  return <Fragment>
      <Helmet>
        <title>{menuItem?.title}</title>
      </Helmet>
    </Fragment>;
};
export { Main };