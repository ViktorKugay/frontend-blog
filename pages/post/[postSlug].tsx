import {NextPageContext} from 'next';

import {PostPage} from '@atomic/templates/PostPage/PostPage';
import {PostHead} from '@atomic/templates/PostPage/PostHead';
import {ErrorPage} from '@atomic/templates/ErrorPage/ErrorPage';
import {useUpdateViews} from '@hooks/metrics/useUpdateViews';
import {usePostBySlug} from '@hooks/posts/usePostsStore';

interface Props {
  postSlug: string;
}

export default function PostRoute({postSlug}: Props): JSX.Element {
  const post = usePostBySlug(postSlug);

  useUpdateViews(post);

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

PostRoute.getInitialProps = ({query}: NextPageContext): Props => {
  const postSlug = query.postSlug as string;

  return {postSlug};
};
