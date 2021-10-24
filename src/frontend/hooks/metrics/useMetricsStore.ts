import {MetricsTable} from '../../services/metrics/Metrics';
import {useStore} from 'effector-react';
import {metricsStore} from '@store';
import {useEffect} from 'react';

export function useMetricsStore(metrics: MetricsTable) {
  useEffect(() => {
    if (metrics) {
      metricsStore.setMetrics(metrics);
    }
  }, []);

  return {
    metrics: useStore(metricsStore.getStore()),
    metricsStore,
  };
}
