import s from './AppPage.module.scss';

import {PropsWithChildren} from 'react';

import {MuiThemeProvider} from '@context/MuiThemeProvider';

interface Props {}

export function AppPage({children}: PropsWithChildren<Props>): JSX.Element {
  return (
    <MuiThemeProvider>
      <div className={s.root}>{children}</div>
    </MuiThemeProvider>
  );
}
