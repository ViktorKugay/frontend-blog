import {Post} from '@store/posts/Posts';
import {postsStore} from '@store';

export function usePostBySlug(slug: string): Post | undefined {
  if (!slug) return undefined;

  return postsStore.findOneBySlug(slug);
}
