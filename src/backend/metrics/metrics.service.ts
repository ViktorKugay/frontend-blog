import {FireStoreRepository} from '../database/database.repository';
import {Repository} from '../database/database.types';
import {Metrics} from './metrics.entity';
import {Collection} from '../constants';
import pMemoize from 'p-memoize';

const CACHE_TIME_TO_LIVE = {maxAge: 30000};

class MetricsService {
  private readonly firestoreRepository: Repository;

  constructor() {
    this.firestoreRepository = new FireStoreRepository();
  }

  public updateViewsByPostId = async (postId: string): Promise<void> => {
    await this.firestoreRepository.incrementById(
      Collection.Metrics,
      postId,
      'views',
    );
  };

  private _findAllMetrics = async (): Promise<Metrics[]> => {
    return await this.firestoreRepository.findAll(Collection.Metrics);
  };

  public findAllMetrics = pMemoize(this._findAllMetrics, CACHE_TIME_TO_LIVE);
}

export const metricsService = new MetricsService();
