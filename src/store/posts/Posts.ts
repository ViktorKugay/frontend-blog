import {createEffect, createStore, Effect, Store} from 'effector';
import {PostsService, PostsTable} from '../../services/posts/Posts';

export interface Effects {
  fetchAll: Effect<void, PostsTable, Error>;
}

export class PostsStore {
  private readonly store: Store<PostsTable>;
  private readonly postsService: PostsService;

  private readonly effects: Effects;

  constructor() {
    this.store = this.createPostsStore();
    this.postsService = this.createPostsService();

    this.effects = {
      fetchAll: this.createFetchAllEffect(),
    };
  }

  public getStore = (): Store<PostsTable> => {
    return this.store;
  };

  public fetchAll = (): void => {
    this.effects.fetchAll();
  };

  private createFetchAllEffect(): Effect<void, PostsTable, Error> {
    const fetchEffect = createEffect(this.postsService.findAll);

    this.store.on(fetchEffect.doneData, (_, result) => {
      return result;
    });

    return fetchEffect;
  }

  private createPostsService() {
    return new PostsService();
  }

  private createPostsStore() {
    return createStore({});
  }
}
