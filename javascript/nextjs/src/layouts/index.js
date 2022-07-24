import PropTypes from 'prop-types';
import DefaultLayout from './default';
import AuthLayout from './auth';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['default', 'auth']),
};

export default function Layout({ type = 'default', children }) {
  switch(type) {
    case 'auth' : {
      return <AuthLayout> {children} </AuthLayout>;
    }

    default: {
      return <DefaultLayout> {children} </DefaultLayout>;
    }
  }
}
