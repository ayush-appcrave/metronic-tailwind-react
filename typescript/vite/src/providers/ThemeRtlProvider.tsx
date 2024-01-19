import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { type ReactNode } from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

import { useSettings } from './SettingsProvider';

interface Props {
  children: ReactNode;
}

const ThemeRtlProvider = ({ children }: Props) => {
  const { settings } = useSettings();
  const { direction } = settings;

  const cacheRtl = createCache({
    key: direction === 'rtl' ? 'muirtl' : 'css',
    stylisPlugins: direction === 'rtl' ? [prefixer, rtlPlugin] : []
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export { ThemeRtlProvider };