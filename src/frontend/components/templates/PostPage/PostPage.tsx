import s from './PostPage.module.scss';

import {PropsWithChildren} from 'react';

import {PostContent} from '@atomic/molecules/PostContent/PostContent';
import {AppPage} from '@atomic/templates/AppPage/AppPage';
import {Header} from '@atomic/organisms/Header/Header';
import {Footer} from '@atomic/organisms/Footer/Footer';

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  html: string;
}

export function PostPage(props: PropsWithChildren<Props>): JSX.Element {
  return (
    <AppPage>
      <Header />
      <main className={s.root}>
        <PostContent {...props} />
      </main>
      <Footer />
    </AppPage>
  );
}
