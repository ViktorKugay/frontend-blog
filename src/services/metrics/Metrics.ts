import {FireStoreProvider} from './providers/FireStoreProvider';
import {Repository} from '../../constants/repositories';
import {StorageProvider} from './providers/types';

export interface MetricsData {
  likes: number;
  views: number;
}

export type MetricsTable = Record<string, MetricsData>;

export class MetricsService {
  private readonly storageProvider: StorageProvider;

  constructor() {
    this.storageProvider = new FireStoreProvider();
  }

  public findAll = async (): Promise<MetricsTable> => {
    return await this.storageProvider.findAll(Repository.PostMetrics);
  };
}
