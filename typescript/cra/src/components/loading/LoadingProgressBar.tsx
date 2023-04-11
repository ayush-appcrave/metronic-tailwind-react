import { Box, LinearProgress, useTheme } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

const LoadingProgressBar = () => {
	const theme = useTheme();

	return (
		<Box sx={{ 
			position: "fixed",
			zIndex: (zIndex.modal + 1),
			top: 0,
			left: 0,
			right: 0
		}}>
      <LinearProgress color="primary"/>
    </Box>
	)
}

export { LoadingProgressBar }