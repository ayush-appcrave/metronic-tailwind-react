// React 
import * as React from 'react';

// Next
import Document, { Html, Head, Main, NextScript } from 'next/document';

// Emotion
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

// Theme
import palette from '../theme/palette';

function createEmotionCache() {
  return createCache({ key: 'css' });
}

export default class HeroDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <meta name="description" content=""/>

          <meta name="keywords" content="keenthemes,react,material,kit,application,dashboard,admin,template" />

          <meta name="author" content="Hero - React MUI Template" />

          <meta name="theme-color" content={palette.light.primary.main} />

          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />

          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
       
          <link rel="manifest" href="/manifest.json" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:300,400,500,600,700" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

HeroDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <CacheProvider value={cache}>
            <App {...props} />
          </CacheProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);

  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
