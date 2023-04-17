import { PropsWithChildren, useEffect, useState, useMemo } from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import { useSettings } from './SettingsProvider';

type Props = {
  children: React.ReactNode;
};

const ThemeRtlProvider = ({ children }: Props) => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const { direction } = settings;

  const cacheRtl = createCache({
    key: direction === 'rtl' ? 'muirtl' : 'css',
    stylisPlugins: direction === 'rtl' ? [prefixer, rtlPlugin] : []
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export { ThemeRtlProvider };
