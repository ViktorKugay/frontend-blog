import {createTheme, Theme, ThemeProvider} from '@material-ui/core';
import {PropsWithChildren, useEffect, useState} from 'react';
import {grey, deepPurple} from '@material-ui/core/colors';

interface Props {}

const muiTheme = createTheme({
  palette: {
    common: {
      black: grey[900],
      white: grey[50],
    },
    primary: {
      light: grey[300],
      main: grey[600],
      dark: grey[900],
    },
    secondary: {
      light: deepPurple[50],
      main: deepPurple[500],
      dark: deepPurple[900],
    },
  },
});

export function MuiThemeProvider({
  children,
}: PropsWithChildren<Props>): JSX.Element {
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    setTheme(muiTheme);
  }, []);

  if (!theme) {
    return <>{children}</>;
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
