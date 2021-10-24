import {MetricsData, MetricsTable} from '../../services/metrics/Metrics';
import {createStore, Store, Effect, Event, createEvent} from 'effector';

interface Effects {
  updateViewsByPostId?: Effect<void, MetricsTable, Error>;
}

interface Events {
  setMetrics: Event<MetricsTable>;
}

export class MetricsStore {
  private readonly store: Store<MetricsTable>;
  private readonly effects: Effects;
  private readonly events: Events;

  constructor() {
    this.store = createStore<MetricsTable>([]);
    this.effects = {};
    this.events = {
      setMetrics: this.iniSetMetricsEvent(),
    };
  }

  public getStore = (): Store<MetricsTable> => {
    return this.store;
  };

  public findOneByPostId = (postId: string): MetricsData | undefined => {
    return this.store.getState().find((m) => m.postId === postId);
  };

  public setMetrics = (metrics: MetricsTable): void => {
    this.events.setMetrics(metrics);
  };

  private iniSetMetricsEvent() {
    const setMetrics = createEvent<MetricsTable>();

    this.store.on(setMetrics, (_, metrics) => {
      return metrics;
    });

    return setMetrics;
  }
}
