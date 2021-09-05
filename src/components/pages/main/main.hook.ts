import {useEffect, useState} from 'react';
import {PostId, PostMetrics, Post, FetchStatus} from '../../../types/types';
import {scrollToElement} from 'src/utils/scroll-to-element';
import {useStore} from '../../../store/store';

import posts from '../../../../posts.json';

interface State {
  posts: any[];
}

export function useMainPage(): FetchStatus<State> {
  const [state, setState] = useState<FetchStatus<State>>({
    status: 'init',
    data: {
      posts,
    },
  });

  const store = useStore();

  // check if page need scroll to element
  useEffect(() => {
    // setTimeout needed to prevent code execution while first render
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        scrollToElement(hash.slice(1));
      }
    });
  }, []);

  return state;
}
