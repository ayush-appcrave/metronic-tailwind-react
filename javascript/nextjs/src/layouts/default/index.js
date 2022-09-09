import PropTypes from 'prop-types';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography, Stack } from '@mui/material';
import useSettings from '../../_core/hooks/useSettings';
import { LAYOUT_DEFAULT } from '../../config';
import Sidebar from './sidebar';

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function DefaultLayout({ children }) {
	return (
		<>
			<Sidebar />

			<Box
				component="main"
				sx={{
					px: { lg: 2 }
				}}
			>
				{children}
			</Box>
    </>
	);
}
