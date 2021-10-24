import {AppProps} from 'next/dist/shared/lib/router/router';
import React from 'react';

import '../src/frontend/styles/post.scss';
import '../src/frontend/styles/prism.scss';
import '../src/frontend/styles/reboot.scss';
import '../src/frontend/styles/variables.scss';

// @See https://nextjs.org/docs/advanced-features/custom-apphttps://nextjs.org/docs/advanced-features/custom-app
export default function CustomApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
