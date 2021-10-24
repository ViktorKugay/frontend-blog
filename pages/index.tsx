import {metricsService} from '@services';
import {MainPage} from '@atomic/templates/MainPage/MainPage';
import {MainHead} from '@atomic/templates/MainPage/MainHead';
import {MetricsTable} from '../src/frontend/services/metrics/Metrics';
import {useMetricsStore} from '@hooks/metrics/useMetricsStore';

interface Props {
  metrics: MetricsTable;
}

export default function MainRoute({metrics}: Props): JSX.Element {
  useMetricsStore(metrics);

  return (
    <>
      <MainHead />
      <MainPage />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metrics: await metricsService.findAll(),
    },
  };
}
