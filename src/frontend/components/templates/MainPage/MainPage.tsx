import React from 'react';
import {AppPage} from '@atomic/templates/AppPage/AppPage';
import {Footer} from '@atomic/organisms/Footer/Footer';
import {Header} from '@atomic/organisms/Header/Header';
import {Biography} from '@atomic/organisms/Biography/Biography';
import {PostsList} from '@atomic/organisms/PostsList/PostsList';
import {ProjectsList} from '../../organisms/ProjectsList/ProjectsList';

export function MainPage(): JSX.Element {
  return (
    <AppPage>
      <Header />
      <main>
        <Biography />
        <PostsList />
        <ProjectsList />
      </main>
      <Footer />
    </AppPage>
  );
}
