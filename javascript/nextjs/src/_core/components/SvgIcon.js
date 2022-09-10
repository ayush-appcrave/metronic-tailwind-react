import { forwardRef } from 'react';
import SVG from 'react-inlinesvg';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

export const getSvgIcon = (icon, path = 'media/icons/duotune/') => {
  return (
    <SVG src={path + icon}/>
  )
};

const SvgIcon = forwardRef(({ icon, path = 'media/icons/duotune/', size = '24px', sx }, ref) => {
  const theme = useTheme();

  return <SVG src={path + icon} width={size} height={size}/>
});

SvgIcon.propTypes = {
  icon: PropTypes.string,
  path: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
};

export default SvgIcon;