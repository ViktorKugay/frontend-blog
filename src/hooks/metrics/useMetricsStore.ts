import {useStore} from 'effector-react';
import {MetricsTable} from '../../services/metrics/Metrics';
import {MetricsStore} from '../../store/metrics/Metrics';

const metricsStore = new MetricsStore();

export function useMetricsStore(): [MetricsTable, MetricsStore] {
  return [useStore(metricsStore.getStore()), metricsStore];
}
