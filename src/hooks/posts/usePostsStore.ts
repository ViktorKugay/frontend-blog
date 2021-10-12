import {useStore} from 'effector-react';
import {PostsTable} from '../../services/posts/Posts';
import {PostsStore} from '../../store/posts/Posts';

const postsStore = new PostsStore();

export function usePostsStore(): [PostsTable, PostsStore] {
  return [useStore(postsStore.getStore()), postsStore];
}
