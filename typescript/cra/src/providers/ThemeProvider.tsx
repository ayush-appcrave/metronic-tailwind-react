import { type PropsWithChildren, useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  StyledEngineProvider,
  createTheme,
  type ThemeOptions,
  ThemeProvider as CustomThemeProvider
} from '@mui/material/styles';
import { useSettings } from './SettingsProvider';
import { componentsCustomization } from '../theme/customization';
import { getPalette, typography, breakpoints, GlobalStyles } from '../theme';
import { getSystemShadows, getCustomShadows } from '../theme/shadows';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { settings, getMode } = useSettings();
  const { direction } = settings;

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints,
      typography,
      palette: getPalette(getMode()),
      shadows: getSystemShadows(getMode()),
      customShadows: getCustomShadows(getMode()),
      direction
    }),
    [direction, getMode()]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsCustomization(theme);

  return (
    <StyledEngineProvider injectFirst>
      <CustomThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles theme={theme} />
        {children}
      </CustomThemeProvider>
    </StyledEngineProvider>
  );
};

export { ThemeProvider };
