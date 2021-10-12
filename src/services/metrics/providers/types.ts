import {Repository} from '../../../constants/repositories';

export abstract class StorageProvider {
  /**
   * Finds entities that matches given find options.
   */
  public abstract findAll<T>(repo: Repository): Promise<T>;
  /**
   * Save the given entity
   */
  public abstract save<T>(repo: Repository, entity: T): Promise<T>;
}
