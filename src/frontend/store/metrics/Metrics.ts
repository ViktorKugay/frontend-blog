import {
  createStore,
  Store,
  Effect,
  Event,
  createEvent,
  createEffect,
} from 'effector';
import {MetricsService} from '@services/metrics/Metrics';
import {Metrics} from '@backend/metrics/metrics.entity';

interface Effects {
  updateViewsByPostId: Effect<string, void, Error>;
  fetchAllMetrics: Effect<void, Metrics[], Error>;
}

interface Events {
  setMetrics: Event<Metrics[]>;
}

export class MetricsStore {
  private readonly metricsService: MetricsService;
  private readonly store: Store<Metrics[]>;
  private readonly effects: Effects;
  private readonly events: Events;

  constructor(metricsService: MetricsService) {
    this.metricsService = metricsService;

    this.store = createStore<Metrics[]>([]);

    this.effects = {
      fetchAllMetrics: this.initFetchAllMetrics(),
      updateViewsByPostId: this.initUpdateViewsByPostId(),
    };
    this.events = {
      setMetrics: this.iniSetMetricsEvent(),
    };
  }

  public getStore = (): Store<Metrics[]> => {
    return this.store;
  };

  public findOneByPostId = (postId: string): Metrics | undefined => {
    return this.store.getState().find((m) => m.postId === postId);
  };

  public setMetrics = (metrics: Metrics[]): void => {
    this.events.setMetrics(metrics);
  };

  public fetchAllMetrics = () => {
    this.effects.fetchAllMetrics();
  };

  public updateViewsByPostId = (postId: string) => {
    this.effects.updateViewsByPostId(postId);
  };

  private initUpdateViewsByPostId() {
    const updateViewsByPostId = createEffect(
      this.metricsService.updateViewsByPostId,
    );

    return updateViewsByPostId;
  }

  private initFetchAllMetrics() {
    const fetchAllMetrics = createEffect(this.metricsService.getMetrics);

    this.store.on(fetchAllMetrics.done, (_, {result}) => {
      return result;
    });

    return fetchAllMetrics;
  }

  private iniSetMetricsEvent() {
    const setMetrics = createEvent<Metrics[]>();

    this.store.on(setMetrics, (_, metrics) => {
      return metrics;
    });

    return setMetrics;
  }
}
