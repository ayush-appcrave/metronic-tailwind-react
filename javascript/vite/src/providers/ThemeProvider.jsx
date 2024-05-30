import { CssBaseline } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider as CustomThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { breakpoints, getPalette, GlobalStyles, typography } from '../theme';
import { componentsCustomization } from '../theme/customization';
import { getCustomShadows, getSystemShadows } from '../theme/shadows';
import { useSettings } from './SettingsProvider';
const ThemeProvider = ({
  children
}) => {
  const {
    settings,
    getMode
  } = useSettings();
  const {
    direction
  } = settings;
  const themeOptions = useMemo(() => ({
    breakpoints,
    typography,
    shape: {
      borderRadius: 3
    },
    palette: getPalette(getMode()),
    shadows: getSystemShadows(getMode()),
    customShadows: getCustomShadows(getMode()),
    direction
  }), [direction, getMode()]);
  const theme = createTheme(themeOptions);
  theme.components = componentsCustomization(theme);
  return <StyledEngineProvider injectFirst>
      <CustomThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles theme={theme} />
        {children}
      </CustomThemeProvider>
    </StyledEngineProvider>;
};
export { ThemeProvider };