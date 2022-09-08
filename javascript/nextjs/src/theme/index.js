import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import useSettings from '../_core/hooks/useSettings';
import palette from './palette';
import breakpoints from './breakpoints';

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ThemeProvider({ children }) {
  const { mode, direction } = useSettings();

  const isLightMode = mode === 'light';

  const options = useMemo(
    () => ({
      breakpoints,
      palette: isLightMode ? palette.light : palette.dark,   
      direction: direction
    }),
    [isLightMode, direction]
  );

  const theme = createTheme(options);

  //theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
