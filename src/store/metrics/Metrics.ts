import {MetricsData, MetricsService, MetricsTable} from '../../services/metrics/Metrics';
import {createStore, Store, Effect, createEffect} from 'effector';

export interface Effects {
  fetchAll: Effect<void, MetricsTable, Error>;
}

export class MetricsStore {
  private readonly store: Store<MetricsTable>;
  private readonly metricsService: MetricsService;

  private readonly effects: Effects;

  constructor() {
    this.store = this.createMetricsStore();

    this.metricsService = this.createMetricsService();

    this.effects = {
      fetchAll: this.createFetchAllEffect(),
    };
  }

  public getStore = (): Store<MetricsTable> => {
    return this.store;
  };

  public findOne = (postId: string): MetricsData => {
    return this.store.getState()[postId];
  };

  public fetchAll = (): void => {
    this.effects.fetchAll();
  };

  private createFetchAllEffect(): Effect<void, MetricsTable, Error> {
    const fetchEffect = createEffect(this.metricsService.findAll);

    this.store.on(fetchEffect.doneData, (_, result) => {
      return result;
    });

    return fetchEffect;
  }

  private createMetricsService(): MetricsService {
    return new MetricsService();
  }

  private createMetricsStore(): Store<MetricsTable> {
    return createStore({});
  }
}
