import {FireStoreProvider} from './providers/FireStoreProvider';
import {Repository} from '@constants/repositories';
import {StorageProvider} from './providers/types';

export interface MetricsData {
  postId: string;
  likes: number;
  views: number;
}

export type MetricsTable = MetricsData[];

export class MetricsService {
  private readonly storageProvider: StorageProvider;

  constructor() {
    this.storageProvider = new FireStoreProvider();
  }

  public findAll = async (): Promise<MetricsTable> => {
    return await this.storageProvider.findAll(Repository.PostMetrics);
  };

  public updateViewsById = async (id: string): Promise<void> => {
    await this.storageProvider.incrementById(
      Repository.PostMetrics,
      id,
      'views',
    );
  };
}
