import {useEffect, useState} from 'react';
import {PostMetrics, Post, FetchStatus} from '../../../types/types';

interface State {
  metrics: PostMetrics;
  post: Post;
}

export function usePostPage(post: Post): FetchStatus<State> {
  const [state, setState] = useState<FetchStatus<State>>({
    status: 'init',
    data: {
      post,
      metrics: {
        views: 0,
        likes: 0,
      },
    },
  });

  return state;
}
