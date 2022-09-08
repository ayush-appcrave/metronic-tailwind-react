import PropTypes from 'prop-types';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import useSettings from '../../_core/hooks/useSettings';
import { LAYOUT_DEFAULT } from '../../config';

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
	
		  <Sidebar isSidebarOpen={open} onSidebarClose={() => setOpen(false)} />
	
		  <Main>{children}</Main>

		  <Footer />
		</Box>
	  );
}
