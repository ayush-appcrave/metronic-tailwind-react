import PropTypes from 'prop-types';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import useThemeSettings from '../../hooks/useThemeSettings';
import { LAYOUT_AUTH } from '../../config';

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function AuthLayout({ children }) {
	return (
		<Box
		  sx={{
			display: { lg: 'flex' },
			minHeight: { lg: 1 },
		  }}
		>
		  {children}
		</Box>
	  );
}
