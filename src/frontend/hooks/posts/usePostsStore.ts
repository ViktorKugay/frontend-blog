import {postsStore} from '../../store';
import {Post} from '../../store/posts/Posts';

export function usePostBySlug(slug: string): Post | undefined {
  if (!slug) return undefined;

  return postsStore.findOneBySlug(slug);
}
