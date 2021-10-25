import {useEffect} from 'react';
import {Post} from '@store/posts/Posts';
import {useMetricsStore} from './useMetricsStore';

export function useUpdateViews(post?: Post) {
  const {metricsStore} = useMetricsStore();

  useEffect(() => {
    if (post) {
      metricsStore.updateViewsByPostId(post.id);
    }
  }, [metricsStore, post]);
}
