import s from './PostsList.module.scss';

import {Text} from '@atomic/atoms/Text/Text';
import {PostCard} from '@atomic/molecules/PostCard/PostCard';
import {Container} from '@atomic/atoms/Container/Container';
import {HTMLElementId} from '@constants/components';
import {postsStore} from '@store';

import c from './config.json';

export function PostsList() {
  const posts = postsStore.findAll();

  return (
    <Container
      tag="section"
      align="start"
      margin="normal"
      className={s.root}
      id={HTMLElementId.Blog}
    >
      <Text
        className={s.title}
        margin="normal"
        display="block"
        weight="700"
        align="left"
        mod="h1"
      >
        {c.PostsList.title}
      </Text>
      {posts.map((props, index) => (
        <PostCard key={index} {...props} className={s.card} />
      ))}
    </Container>
  );
}
