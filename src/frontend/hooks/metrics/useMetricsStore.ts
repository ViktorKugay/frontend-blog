import {useStore} from 'effector-react';
import {metricsStore} from '@store';

export function useMetricsStore() {
  return {
    metrics: useStore(metricsStore.getStore()),
    metricsStore,
  };
}
