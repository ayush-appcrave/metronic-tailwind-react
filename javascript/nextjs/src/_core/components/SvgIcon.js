import { forwardRef } from 'react';
import SVG from 'react-inlinesvg';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

export const getSvgIcon = (icon, size = '24px', path = 'media/icons/duotune/') => {
  return (
    <SVG src={path + icon} width={size} height={size}/>
  )
};

const SvgIcon = forwardRef(({ icon, path = 'media/icons/duotune/', size = '24px'}, ref) => {
  const theme = useTheme();

  return <SVG src={path + icon} width={size} height={size}/>,
});

SvgIcon.propTypes = {
  icon: PropTypes.string,
  path: PropTypes.string,
  size: PropTypes.string
};

export default SvgIcon;