import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import useSettings from '../hooks/useThemeSettings';
import palette from './palette';

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ThemeProvider({ children }) {
  const { themeMode, themeDirection } = useSettings();

  const isLightMode = themeMode === 'light';

  const themeOptions = useMemo(
    () => ({
      breakpoints,
      palette: isLightMode ? palette.light : palette.dark,   
      direction: themeDirection
    }),
    [isLightMode, themeDirection]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
