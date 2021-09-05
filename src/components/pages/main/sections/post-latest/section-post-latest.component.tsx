import React from 'react';
import {Text} from '../../../../ui/text/text.component';
import {Container} from '../../../../ui/container/container.component';
import {CardPostPreviewLarge} from '../../../../cards/post/preview/large/card-post-preview-large.component';

import posts from '../../../../../../posts.json';

import s from './section-post-latest.module.scss';

export const SectionPostLatest: React.FC = () => {
  const renderCard = (post: any) => {
    return (
      <CardPostPreviewLarge
        id={post.attributes.id}
        title={post.attributes.title}
        subtitle={post.attributes.description}
        imageUrl={post.attributes.image}
        likesCount={10}
        viewsCount={10}
        className={s.card}
      />
    );
  };

  return (
    <Container align="start" margin="normal" className={s.root} id="blog">
      <Text className={s.title} margin="normal" display="block" weight="700" mod="h1" align="left">
        {'Relevant Posts'}
      </Text>
      {posts.map(renderCard)}
    </Container>
  );
};
