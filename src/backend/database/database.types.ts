import {Collection} from '../constants';

export abstract class Repository {
  /**
   * Finds entities that matches given find options.
   */
  public abstract findAll<T>(collection: Collection): Promise<T[]>;
  /**
   * Save the given entity
   */
  public abstract save<T>(collection: Collection, entity: T): Promise<T>;

  /**
   * Increment value by key
   */
  public abstract incrementById(
    collection: Collection,
    id: string,
    key: string,
  ): Promise<void>;
}
