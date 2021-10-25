import {useEffect} from 'react';
import {useMetricsStore} from './useMetricsStore';

export function useFetchAllMetrics() {
  const {metricsStore} = useMetricsStore();

  useEffect(() => {
    metricsStore.fetchAllMetrics();
  }, [metricsStore]);
}
