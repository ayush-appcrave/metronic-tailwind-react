import { Box, CircularProgress, useTheme } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

const LoadingPage = () => {
	const theme = useTheme();

	return (
		<Box
      sx={{
        display: "flex",
        alignItems: "center",
				justifyContent: "center",
				flexDirection: "column"
      }}
    >
      <CircularProgress color="primary"/>
    </Box>
	)
}

export { LoadingPage }