import sortBy from 'lodash/sortBy';

import posts from '../../../../posts.json';

export interface Post {
  id: string;
  slug: string;
  description: string;
  title: string;
  image: string;
  html: string;
}

export class PostsStore {
  private readonly posts: Post[];

  constructor() {
    this.posts = sortBy(posts, ({date}) => new Date(date).getTime()).reverse();
  }

  public findAll = (): Post[] => {
    return this.posts;
  };

  public findOneBySlug = (slug: string): Post | undefined => {
    return this.posts.find((p) => p.slug === slug);
  };
}
