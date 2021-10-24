import s from './AppPage.module.scss';

import {PropsWithChildren, useEffect} from 'react';

import {MuiThemeProvider} from '@context/MuiThemeProvider';
import {scrollIntoView} from '../../../utils/scrollToElement';

interface Props {}

const DELAY_HASH_SCROLL_PAGE = 1000;

export function AppPage({children}: PropsWithChildren<Props>): JSX.Element {
  useEffect(() => {
    const hasAnchor = window.location.hash;

    if (hasAnchor) {
      setTimeout(() => {
        scrollIntoView(window.location.hash.slice(1));
      }, DELAY_HASH_SCROLL_PAGE);
    }
  }, []);

  return (
    <MuiThemeProvider>
      <div className={s.root}>{children}</div>
    </MuiThemeProvider>
  );
}
