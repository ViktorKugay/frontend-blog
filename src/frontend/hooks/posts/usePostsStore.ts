import {postsStore} from '../../store';
import {Post} from '../../store/posts/Posts';

export function usePostBySlug(slug: string): Post | undefined {
  return postsStore.findOneBySlug(slug);
}
