import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography, Stack } from '@mui/material';
import useSettings from '../../_core/hooks/useSettings';
import { LAYOUT_DEFAULT } from '../../config';
import Sidebar from './sidebar';
import Main from './main';
import { LayoutProvider } from './context';

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function DefaultLayout({ children }) {
	console.log('0+');

	return (
		<LayoutProvider>
			<Sidebar />
			<Main childred={children}/>
    </LayoutProvider>
	);
}
