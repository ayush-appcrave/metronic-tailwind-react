import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';

export const SvgIcon = (icon, path = 'media/icons/duotune/') => {
  return (
    <SVG src={path + icon}/>
  )
};
