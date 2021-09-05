import React from 'react';

import {Header} from '../../common/header/header.component';
import {Footer} from '../../common/footer/footer.component';

import {BgBlue} from '../../ui/bg-blue/bg-blue.component';

import {SectionPostLatest} from './sections/post-latest/section-post-latest.component';
import {SectionBiography} from './sections/biography/section-biography.component';
import {SectionProjects} from './sections/projects/section-projects.component';
import {SectionBooks} from './sections/books/section-books.component';

export const MainPage: React.FC = () => {
  return (
    <>
      <BgBlue />
      <Header />
      <main>
        <SectionBiography />
        <SectionPostLatest />
        <SectionProjects />
        <SectionBooks />
      </main>
      <Footer />
    </>
  );
};
