import {GetStaticPropsContext} from 'next';

import {PostPage} from '@atomic/templates/PostPage/PostPage';
import {PostHead} from '@atomic/templates/PostPage/PostHead';
import {ErrorPage} from '@atomic/templates/ErrorPage/ErrorPage';
import {usePostBySlug} from '@hooks/posts/usePostsStore';
import {metricsService} from '@services';
import {postsStore} from '@store';

interface Props {
  postSlug: string;
}

export default function PostRoute({postSlug}: Props): JSX.Element {
  const post = usePostBySlug(postSlug);
  if (!post) {
    return <ErrorPage mod="404" />;
  }

  return (
    <>
      <PostHead {...post} />
      <PostPage {...post} />
    </>
  );
}
// @See https://nextjs.org/docs/messages/invalid-getstaticpaths-value
export async function getStaticPaths() {
  const posts = postsStore.findAll();

  const paths = posts.map((post) => ({
    params: { postSlug: post.slug },
  }));

  return { paths, fallback: false }
}
// @See https://nextjs.org/docs/basic-features/data-fetching
export async function getStaticProps({params}: GetStaticPropsContext) {
  const postSlug = params?.postSlug as string;

  const post = postsStore.findOneBySlug(postSlug);
  if (post) {
    metricsService.updateViewsById(post.id).catch(() => {});
  }

  return {
    props: {
      postSlug
    },
  };
}

