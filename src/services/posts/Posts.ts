import posts from '../../../posts.json';

export interface PostAttributes {
  id: string;
  date: string;
  title: string;
  image: string;
  description: string;
}

export interface Post {
  body: string;
  html: string;
  bodyBegin: number;
  frontmatter?: string;
  attributes: PostAttributes;
}

export type PostsTable = Record<string, Post>;

export class PostsService {
  public findAll(): PostsTable {
    return posts.reduce<PostsTable>((acc, post) => {
      acc[post.attributes.id] = post;
      return acc;
    }, {});
  }
}
