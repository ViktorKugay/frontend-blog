import {PropsWithChildren} from 'react';
import ErrorPageNext from 'next/error';

interface Props {
  mod: '404';
}

export function ErrorPage({mod}: PropsWithChildren<Props>): JSX.Element {
  if (mod === '404') {
    return <ErrorPageNext statusCode={404} />;
  }

  return <ErrorPageNext statusCode={400} />;
}
