import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { useSettings } from './SettingsProvider';
const RtlProvider = ({
  children
}) => {
  const {
    settings
  } = useSettings();
  const {
    direction
  } = settings;
  const cacheRtl = createCache({
    key: direction === 'rtl' ? 'muirtl' : 'css',
    stylisPlugins: direction === 'rtl' ? [prefixer, rtlPlugin] : []
  });
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};
export { RtlProvider };