import {FireStoreProvider} from './providers/FireStoreProvider';
import {Repository} from '@constants/repositories';
import {StorageProvider} from './providers/types';
import pMemoize from 'p-memoize';

export interface MetricsData {
  postId: string;
  likes: number;
  views: number;
}

export type MetricsTable = MetricsData[];

const MAX_AGE_IN_MS = 10000;

export class MetricsService {
  private readonly storageProvider: StorageProvider;

  constructor() {
    this.storageProvider = new FireStoreProvider();
  }

  private _findAll = async (): Promise<MetricsTable> => {
    return await this.storageProvider.findAll(Repository.PostMetrics);
  };

  public findAll = pMemoize(this._findAll, {maxAge: MAX_AGE_IN_MS});

  public updateViewsById = async (id: string): Promise<void> => {
    await this.storageProvider.incrementById(
      Repository.PostMetrics,
      id,
      'views',
    );
  };
}
