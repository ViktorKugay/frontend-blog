import {
  MetricsData,
  MetricsService,
  MetricsTable,
} from '../../services/metrics/Metrics';
import {createStore, Store, Effect, createEffect} from 'effector';

interface Effects {
  fetchAll: Effect<void, MetricsTable, Error>;
}

export class MetricsStore {
  private readonly store: Store<MetricsTable>;
  private readonly metricsService: MetricsService;

  private readonly effects: Effects;

  constructor(metricsService: MetricsService) {
    this.store = createStore<MetricsTable>([]);

    this.metricsService = metricsService;

    this.effects = {
      fetchAll: this.createFetchAllEffect(),
    };
  }

  public getStore = (): Store<MetricsTable> => {
    return this.store;
  };

  public findOneByPostId = (postId: string): MetricsData | undefined => {
    return this.store.getState().find((m) => m.postId === postId);
  };

  public fetchAll = (): void => {
    this.effects.fetchAll();
  };

  private createFetchAllEffect(): Effect<void, MetricsTable, Error> {
    const fetchEffect = createEffect(this.metricsService.findAll);
    this.store.on(fetchEffect.doneData, (_, result) => result);

    return fetchEffect;
  }
}
