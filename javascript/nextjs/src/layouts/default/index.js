import PropTypes from 'prop-types';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import useSettings from '../../_core/hooks/useSettings';
import { LAYOUT_DEFAULT } from '../../config';
import { Main } from './main';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function DefaultLayout({ children }) {
	return (
		<Box
		  sx={{
			display: { lg: 'flex' },
			minHeight: { lg: 1 },
		  }}
		>
		  <Header />
	
		  <Sidebar onSidebarClose={() => setOpen(false)} />
	
		  <Main>{children}</Main>

		  <Footer />
		</Box>
	  );
}
